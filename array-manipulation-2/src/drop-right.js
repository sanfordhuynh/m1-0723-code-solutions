/* exported dropRight */
function dropRight(array, count) {
  const endPosition = array.length - count;
  const newArray = [];

  for (let i = 0; i < endPosition; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
