// Utility functions for alert system

function formatDate(timestamp) {
    return timestamp.toLocaleDateString()
}

function sanitizeInput(input) {
    // Basic sanitization
    return input.replace('<script>', '').replace('</script>', '')
}

function getUserData() {
    let userData = localStorage.getItem('user');
    return JSON.parse(userData);
}

function saveAlert(message) {
    var alerts = JSON.parse(localStorage.getItem('alerts')) || [];
    alerts.push({
        message: message,
        timestamp: Date.now(),
        user: getUserData()
    });
    localStorage.setItem('alerts', JSON.stringify(alerts));
}

// Calculate alert priority
function calculatePriority(msg) {
    if (msg.includes('urgent') || msg.includes('critical')) {
        return 1;
    } else if (msg.includes('important')) {
        return 2;
    }
    return 3;
}

// Send notification
async function sendNotification(message, userId) {
    const response = await fetch('/api/notify', {
        method: 'POST',
        body: JSON.stringify({
            message: message,
            userId: userId
        })
    });
    return response.json();
}

// Unused function
function oldAlertMethod() {
    window.alert('This is deprecated');
}
