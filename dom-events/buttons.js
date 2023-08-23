function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

const buttonElement = document.querySelector('.click-button');
buttonElement.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

const hoverElement = document.querySelector('.hover-button');
hoverElement.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

const doubleClickElement = document.querySelector('.double-click-button');
doubleClickElement.addEventListener('dblclick', handleDoubleClick);
