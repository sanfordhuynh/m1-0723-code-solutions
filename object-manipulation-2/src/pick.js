/* exported pick */
/**
 *
 * Define a function pick that takes 2 parameter, (source,keys)
 * Create an empty object for newArray
 *
 * for each key in keys
 *  if source[key] is not undefined and source has it's own property key
 *  set newArray[key] to the source[key]
 *
 * return newArray
 */
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
