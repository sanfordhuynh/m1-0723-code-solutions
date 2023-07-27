/* exported getKeys */
/**
 * Define a function named "getKeys", that accepts one argument 'object'
 * Create a const variable named 'keys' and assign it an empty array
 * Begin a loop that iterates through the object
 *  For iterating through the object properties
 *  Push the property into the keys array
 * Return the 'keys' variable
 */
function getKeys(object) {
  const keys = [];

  for (const property in object) {
    keys.push(property);
  }
  return keys;
}
