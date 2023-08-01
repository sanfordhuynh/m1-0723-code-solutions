/* exported drop */
/**
 *
 * Define a new constant called newArray that is an empyty array
 * Define a constant startingPosition where it starts at the count
 *
 * If count is greater than or equal to the array's length
 *  return an empty array []
 *
 * for i from the starting position to array.length
 *    push array[i] into the newArray
 *
 * return newArray
 */
function drop(array, count) {
  const newArray = [];
  const startingPosition = count;

  if (count >= array.length) {
    return [];
  }

  for (let i = startingPosition; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}
