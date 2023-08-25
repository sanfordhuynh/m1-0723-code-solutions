let clickCounter = 0;

const hotButtonElement = document.querySelector('.hot-button');
const clickCountElement = document.querySelector('.click-count');

hotButtonElement.addEventListener('click', () => {
  clickCounter++;
  clickCountElement.textContent = clickCounter;
});

hotButtonElement.addEventListener('click', () => {
  if (clickCounter < 4) {
    hotButtonElement.className = 'hot-button cold';
  } else if (clickCountElement < 7) {
    hotButtonElement.className = 'hot-button cool';
  } else if (clickCountElement < 10) {
    hotButtonElement.className = 'hot-button tepid';
  } else if (clickCountElement < 13) {
    hotButtonElement.className = 'hot-button warm';
  } else if (clickCountElement < 16) {
    hotButtonElement.className = 'hot-button hot';
  } else {
    hotButtonElement.className = 'hot-button nuclear';
  }
});
