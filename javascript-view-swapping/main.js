const tabContainer = document.querySelector('.tab-container ');

const tabElements = document.querySelectorAll('.tab');
const viewElements = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    tabElements.forEach((tabElement) => {
      if (tabElement === event.target) {
        // if the tabElement equals to the event.target, update className to .active
        tabElement.className = 'tab active';
      } else {
        tabElement.className = 'tab';
      }
    });

    const dataViewValue = event.target.getAttribute('data-view');

    viewElements.forEach((viewElement) => {
      if (viewElement.getAttribute('data-view') === dataViewValue) {
        viewElement.classList.remove('hidden');
      } else {
        viewElement.classList.add('hidden');
      }
    });
  }
});
