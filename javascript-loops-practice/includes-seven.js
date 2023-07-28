/* exported includesSeven */
function includesSeven(array) {
  let sevenIsPresent = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      sevenIsPresent = true;
      break;
    }
  }
  return sevenIsPresent;
}
