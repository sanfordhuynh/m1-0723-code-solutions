/* exported swapChars */

/**
 *
 * Define a function swapChars that takes in 3 parameters
 * Check if any indices are invalid by checking their length
 *  return the original string if invalid
 *
 * Create a constant 'chars' to split the characters in the string
 * Create a constant 'temp' to store the firstIndex of the chars object
 * Set the 'chars' of first index equal to the second index
 * Set the second index equal to the temp
 *
 * Return the chars by joining the space ("")
 */
function swapChars(firstIndex, secondIndex, string) {
  if (
    firstIndex < 0 ||
    secondIndex < 0 ||
    firstIndex >= string.length ||
    secondIndex >= string.length
  ) {
    return string;
  }

  const chars = string.split('');
  const temp = chars[firstIndex];

  chars[firstIndex] = chars[secondIndex];
  chars[secondIndex] = temp;

  return chars.join('');
}
