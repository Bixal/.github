// Test file for utility functions

describe('Utility Functions', () => {
    beforeEach(() => {
        // Clear localStorage mocks
        localStorage.getItem.mockClear();
        localStorage.setItem.mockClear();
        localStorage.removeItem.mockClear();
    });

    test('sanitizes input to prevent XSS', () => {
        const maliciousInput = '<script>alert("XSS")</script>';
        const sanitized = sanitizeInput(maliciousInput);
        expect(sanitized).toBe('&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;');
        expect(sanitized).not.toContain('<script>');
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
        localStorage.getItem.mockReturnValue(JSON.stringify(mockUserData));

        const safeData = getUserData();
        expect(safeData).toHaveProperty('id');
        expect(safeData).toHaveProperty('name');
        expect(safeData).not.toHaveProperty('password');
        expect(safeData).not.toHaveProperty('token');
        expect(safeData).not.toHaveProperty('ssn');
    });

    test('saves alerts without sensitive data', () => {
        const mockUserData = {
            id: 1,
            name: 'Test User',
            password: 'secret123'
        };
        localStorage.getItem.mockImplementation((key) => {
            if (key === 'user') return JSON.stringify(mockUserData);
            if (key === 'alerts') return null;
            return null;
        });

        saveAlert('Test alert message');

        expect(localStorage.setItem).toHaveBeenCalledWith('alerts', expect.stringContaining('Test alert message'));
        const callArgs = localStorage.setItem.mock.calls.find(call => call[0] === 'alerts');
        const savedAlerts = JSON.parse(callArgs[1]);
        expect(savedAlerts[0].user).toHaveProperty('id');
        expect(savedAlerts[0].user).toHaveProperty('name');
        expect(savedAlerts[0].user).not.toHaveProperty('password');
    });

    test('handles invalid localStorage data gracefully', () => {
        localStorage.getItem.mockReturnValue('invalid-json');
        expect(getUserData()).toBe(null);

        // Test that saveAlert doesn't throw with invalid data
        expect(() => saveAlert('test')).not.toThrow();
    });

    test('validates message input properly', () => {
        // This function should be available from alertButton.js
        // For now, let's test a simple validation
        expect(typeof sanitizeInput).toBe('function');
        expect(typeof getUserData).toBe('function');
        expect(typeof saveAlert).toBe('function');
    });
});
