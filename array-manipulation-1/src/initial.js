/* exported initial */

/**
 * Define a function named "initial", that accepts one argument ('array')
 * Declare a const called 'initalArray' and set it's value to an empty array
 * Begin a loop that iterates through the array where
 *  For each index in the array
 *  Push the value at that array's index into the initialArray until 2nd last element
 * Return the value of the initialArray
 *
 *
 */
function initial(array) {
  const initialArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    initialArray.push(array[i]);
  }
  return initialArray;
}
