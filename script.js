
const clientId = "daafaef84f6645a58fa7a92405cf7bbc"; // Replace with your client ID or "your_client_id"
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code) {
    redirectToAuthCodeFlow(clientId);

} else {
const accessToken = await getAccessToken(clientId, code);
const profile = await fetchProfile(accessToken);
populateUI(profile);
}

export async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:5500/spotify.html");// Add your redirect URI
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}
export async function getAccessToken(clientId, code) {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:5500/spotify.html");// Add your redirect URI
    params.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });

    const { access_token } = await result.json();
    return access_token;
}
async function fetchProfile(token) {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
} 
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameErr = document.getElementById('username-err');
    const passwordErr = document.getElementById('password-err');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Reset error messages
        usernameErr.style.display = 'none';
        passwordErr.style.display = 'none';

        let valid = true;

        // Validate username
        if (username.value.trim() === '') {
            usernameErr.style.display = 'block';
            valid = false;
        }

        // Validate password
        if (password.value.trim() === '') {
            passwordErr.style.display = 'block';
            valid = false;
        }

        if (valid) {
            // Perform login action (e.g., send data to server)
            console.log('Form submitted');
            // You can use fetch or XMLHttpRequest to send data to the server here
        }
    });
});


