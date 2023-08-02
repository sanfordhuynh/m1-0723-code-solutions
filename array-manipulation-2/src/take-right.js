/* exported takeRight */
function takeRight(array, count) {
  if (count >= array.length) {
    return array;
  } else {
    const newArray = [];
    const startPosition = array.length - count;
    const endPosition = array.length;

    for (let i = startPosition; i < endPosition; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
}
