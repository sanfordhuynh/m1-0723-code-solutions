const circle = document.querySelector('.circle');
const body = document.body;

circle.addEventListener('click', () => {
  circle.classList.toggle('dark-circle');
  body.classList.toggle('dark-mode');
});
