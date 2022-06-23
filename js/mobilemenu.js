const toggleMenuButton = document.getElementById('toggle-menu');
const menu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close-icon');

toggleMenuButton.addEventListener('click', () => {
  toggleMenuButton.classList.toggle('active');
  menu.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('active');
});