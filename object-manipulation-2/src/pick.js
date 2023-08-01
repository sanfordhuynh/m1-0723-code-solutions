/* exported pick */
function pick(source, keys) {
  const newArray = {};

  for (const key of keys) {
    if (
      source[key] !== undefined &&
      Object.prototype.hasOwnProperty.call(source, key)
    ) {
      newArray[key] = source[key];
    }
  }
  return newArray;
}
