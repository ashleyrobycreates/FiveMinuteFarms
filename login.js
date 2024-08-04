document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const messageContainer = document.createElement('div');
    messageContainer.id = 'message-container';
    form.appendChild(messageContainer);

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Reset message container
        messageContainer.textContent = '';

        // Validate username and password
        if (username.value.trim() === '') {
            alert('Please enter a valid username');
            return;
        }

        if (password.value.trim() === '') {
            alert('Please enter a valid password');
            return;
        }

        // Perform login action (e.g., send data to server)
        const loginData = {
            username: username.value,
            password: password.value
        };

        fetch('http://127.0.0.1:5500/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Display success message
                messageContainer.textContent = 'Login successful! Redirecting...';
                messageContainer.style.color = 'green';

                // Redirect after a short delay
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 2000); // 2 seconds delay
            } else {
                // Show error message
                alert('Login failed: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});