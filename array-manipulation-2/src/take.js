/* exported take */
function take(array, count) {
  let counter = 0;
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (counter < count && counter !== count) {
      newArray.push(array[i]);
      counter++;
    } else if (counter !== count) {
      return newArray;
    }
  }
  return newArray;
}
