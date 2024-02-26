// script.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleNavBtn = document.getElementById('toggle-nav');
    const nav = document.querySelector('nav');

    toggleNavBtn.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    const keywordButtons = document.querySelectorAll('.keyword-button');

    keywordButtons.forEach(button => {
        button.addEventListener('click', function () {
            button.classList.toggle('selected');
        });
    });

    const showLoginBtn = document.getElementById('show-login');
    const showSignupBtn = document.getElementById('show-signup');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    showLoginBtn.addEventListener('click', function () {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });

    showSignupBtn.addEventListener('click', function () {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    });

    document.getElementById('login-button').addEventListener('click', function () {
        simulateAction('login');
    });

    document.getElementById('signup-button').addEventListener('click', function () {
        simulateAction('signup');
    });

    function simulateAction(action) {
        alert(`Simulating ${action}. Add actual ${action} logic here.`);
    }
});
