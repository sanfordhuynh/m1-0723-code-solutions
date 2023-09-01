function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name ' + event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name ' + event.target.name);
}

function handleInput(event) {
  console.log('Value of ' + event.target.name + ' ' + event.target.value);
}

document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('user-name');
  const emailInput = document.getElementById('user-email');
  const messageTextArea = document.getElementById('user-message');

  nameInput.addEventListener('focus', handleFocus);
  emailInput.addEventListener('focus', handleFocus);
  messageTextArea.addEventListener('focus', handleFocus);

  nameInput.addEventListener('blur', handleBlur);
  emailInput.addEventListener('blur', handleBlur);
  messageTextArea.addEventListener('blur', handleBlur);

  nameInput.addEventListener('input', handleInput);
  emailInput.addEventListener('input', handleInput);
  messageTextArea.addEventListener('input', handleInput);
});
