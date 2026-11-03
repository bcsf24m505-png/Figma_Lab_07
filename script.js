const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navLinks.classList.toggle('open', !isOpen);
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('open');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#signup-form').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.querySelector('#email').value.trim();
  document.querySelector('.form-message').textContent = `Thanks! ${email} is on the demo signup list. (No data was sent.)`;
  event.target.reset();
});
