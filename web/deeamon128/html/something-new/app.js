const menuToggle = document.querySelector('.toggle-menu');
const container = document.querySelector('.container');

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  container.classList.toggle('active');
})
