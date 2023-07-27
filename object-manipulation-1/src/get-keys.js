/* exported getKeys */
function getKeys(object) {
  const keys = [];

  for (const property in object) {
    keys.push(property);
  }
  return keys;
}
