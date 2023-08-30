/* exported flatten */
function flatten(array) {
  return array.reduce((acc, value) => acc.concat(value), []);
}
