const openModalButton = document.querySelector('.modalButton');
const closeModalButton = document.querySelector('.closeButton');
const modal = document.querySelector('.modal');

openModalButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
