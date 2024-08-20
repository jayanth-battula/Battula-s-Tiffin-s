document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const signupUsernameField = document.getElementById('signup-username');
    const signupPasswordField = document.getElementById('signup-password');
    const errorMessage = document.getElementById('error-message');
    const signupErrorMessage = document.getElementById('signup-error-message');
    const formTitle = document.getElementById('form-title');
    const toggleLink = document.getElementById('toggle-form');
    const signupToggleLink = document.getElementById('signup-toggle-form');
    const validUsername = 'user';
    const validPassword = 'pass123';
    
    let users = JSON.parse(localStorage.getItem('users')) || [];

    toggleLink.addEventListener('click', (event) => {
        event.preventDefault();
        formTitle.textContent = 'Sign Up';
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        errorMessage.style.display = 'none';
        signupErrorMessage.style.display = 'none';
    });

    signupToggleLink.addEventListener('click', (event) => {
        event.preventDefault();
        formTitle.textContent = 'Sign In';
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        errorMessage.style.display = 'none';
        signupErrorMessage.style.display = 'none';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = usernameField.value.trim();
        const password = passwordField.value.trim();

        if (username === '' || password === '') {
            errorMessage.style.display = 'block';
            return;
        }

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert('Login successful!');
            window.location.href = 'menu.html';
        } else {
            alert('Incorrect username or password. Please try again.');
        }
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = signupUsernameField.value.trim();
        const password = signupPasswordField.value.trim();

        if (username === '' || password === '') {
            signupErrorMessage.style.display = 'block';
            return;
        }

        if (users.some(user => user.username === username)) {
            alert('Username already exists. Please choose another.');
            return;
        }

        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Sign up successful! You can now sign in.');
        formTitle.textContent = 'Sign In';
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });
});
