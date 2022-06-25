const toggleMenuButton = document.getElementById('toggle-menu');
const menu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close-icon');
const container = document.querySelector('.container');

toggleMenuButton.addEventListener('click', () => {
  toggleMenuButton.classList.toggle('active');
  menu.classList.toggle('active');
  container.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('active');
  container.classList.remove('active');
});