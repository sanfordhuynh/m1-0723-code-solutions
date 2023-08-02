/* exported includes */
function includes(array, value) {
  let included = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      included = true;
      break;
    }
  }
  return included;
}
