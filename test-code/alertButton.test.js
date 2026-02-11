// Test file for alert button

describe('Alert Button', () => {
    test('shows alert when button clicked', () => {
        // TODO: implement test
    });

    test('validates message length', () => {
        const result = validateMessage('test');
        expect(result).toBe(true);
    });

    test('sanitizes input to prevent XSS', () => {
        const maliciousInput = '<script>alert("XSS")</script>';
        const sanitized = sanitizeInput(maliciousInput);
        expect(sanitized).toBe('&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;');
        expect(sanitized).not.toContain('<script>');
    });

    test('validates message input properly', () => {
        expect(validateMessage('')).toBe(false);
        expect(validateMessage('   ')).toBe(false);
        expect(validateMessage('Valid message')).toBe(true);
        expect(validateMessage('a'.repeat(501))).toBe(false);
    });

    test('handles user data safely', () => {
        // Mock localStorage
        const mockUserData = {
            id: 1,
            name: 'Test User',
            password: 'secret123',
            token: 'abc123',
            ssn: '123-45-6789'
        };
        localStorage.setItem('user', JSON.stringify(mockUserData));

        const safeData = getUserData();
        expect(safeData).toHaveProperty('id');
        expect(safeData).toHaveProperty('name');
        expect(safeData).not.toHaveProperty('password');
        expect(safeData).not.toHaveProperty('token');
        expect(safeData).not.toHaveProperty('ssn');
    });

    test('saves alerts without sensitive data', () => {
        // Clear localStorage
        localStorage.removeItem('alerts');

        const mockUserData = {
            id: 1,
            name: 'Test User',
            password: 'secret123'
        };
        localStorage.setItem('user', JSON.stringify(mockUserData));

        saveAlert('Test alert message');

        const alerts = JSON.parse(localStorage.getItem('alerts'));
        expect(alerts).toHaveLength(1);
        expect(alerts[0].message).toBe('Test alert message');
        expect(alerts[0].user).toHaveProperty('id');
        expect(alerts[0].user).toHaveProperty('name');
        expect(alerts[0].user).not.toHaveProperty('password');
    });

    test('handles invalid localStorage data gracefully', () => {
        localStorage.setItem('user', 'invalid-json');
        expect(getUserData()).toBe(null);

        localStorage.setItem('alerts', 'invalid-json');
        // loadAlertHistory should not throw
        expect(() => loadAlertHistory()).not.toThrow();
    });
});
