document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Reset any previous error messages
        username.classList.remove('error');
        password.classList.remove('error');

        let valid = true;

        // Validate username
        if (username.value.trim() === '') {
            username.classList.add('error');
            valid = false;
        }

        // Validate password
        if (password.value.trim() === '') {
            password.classList.add('error');
            valid = false;
        }

        if (valid) {
            // Perform login action (e.g., send data to server)
            console.log('Form submitted');
            // Example of sending data to a server using fetch
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
                    // Redirect to another page or show success message
                    window.location.href = 'dashboard.html';
                } else {
                    // Show error message
                    alert('Login failed: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });
});
