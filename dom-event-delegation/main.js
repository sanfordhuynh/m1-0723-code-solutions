const taskListElement = document.querySelector('.task-list');

taskListElement.addEventListener('click', function (event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);

  const clickedElement = event.target;
  if (clickedElement.tagName === 'BUTTON') {
    const taskListItem = clickedElement.closest('.task-list-item');

    if (taskListItem) {
      console.log('closest: ', taskListItem);

      taskListItem.remove();
    }
  }
});
