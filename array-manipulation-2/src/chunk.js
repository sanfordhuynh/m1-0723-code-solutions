/* exported chunk */
/**
 *
 * Create a new array, insert up to the size #
 *
 */

function chunk(array, size) {
  const newArray = [];

  if (size <= 0) {
    return [];
  }

  let currentChunk = [];

  for (let i = 0; i < array.length; i++) {
    currentChunk.push(array[i]);

    // check if the current chunk is at the desired size or if at the end of array
    if (currentChunk.length === size || i === array.length - 1) {
      newArray.push(currentChunk);
      currentChunk = []; // reset for the next chunk
    }
  }
  return newArray;
}
