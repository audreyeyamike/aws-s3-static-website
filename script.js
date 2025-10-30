// Dark mode toggle
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleBtn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Button click alert
const helloBtn = document.getElementById('hello-btn');
helloBtn.addEventListener('click', () => {
  alert('Hello! Thanks for visiting my static website 😄');
});
