// Add this to your login.js file
function handleLogin(event) {
  event.preventDefault();
  const username = document.querySelector('.sign-in input[type="text"]').value;
  const password = document.querySelector(
    '.sign-in input[type="password"]'
  ).value;

  // Here you would typically validate against a backend
  // For demo purposes, we'll just set a flag in localStorage
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('username', username);

  // Redirect to main page
  window.location.href = 'main.html';
}

function handleSignup(event) {
  event.preventDefault();
  const username = document.querySelector('.sign-up input[type="text"]').value;
  const email = document.querySelector('.sign-up input[type="email"]').value;
  const password = document.querySelector(
    '.sign-up input[type="password"]'
  ).value;

  // Here you would typically send this to a backend
  // For demo purposes, we'll just set a flag in localStorage
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('username', username);

  // Redirect to main page
  window.location.href = 'main.html';
}

// Add event listeners to forms
document.querySelector('.sign-in form').addEventListener('submit', handleLogin);
document
  .querySelector('.sign-up form')
  .addEventListener('submit', handleSignup);

// Create a new file called auth-check.js and add this code
function checkAuth() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
    window.location.href = 'login.html';
  }
}

// Function to handle logout
function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  window.location.href = 'login.html';
}
