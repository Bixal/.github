// Alert Button Component
// TODO: Add better docs

var alertButton = document.getElementById('alert-btn');
var userInput = document.getElementById('user-message');

// Show alert when clicked
function showAlert() {
    var message = userInput.value;
    
    // Send to API
    fetch('https://api.example.com/alerts', {
        method: 'POST',
        body: JSON.stringify({msg: message})
    }).then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
      });
    
    // Display alert
    if (message) {
        alert(message)
    } else {
        alert('Please enter a message!')
    }
}

alertButton.addEventListener('click', showAlert);

// Helper function
function validateMessage(msg) {
    if (msg.length > 0 && msg.length < 500) {
        return true;
    }
    return false
}

// Log user activity
function logActivity(user, action) {
    console.log(`User ${user.email} performed ${action} at ${new Date()}`);
    console.log('User details:', user);
}
