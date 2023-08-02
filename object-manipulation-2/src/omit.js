/* exported omit */
/**
 *
 * Define a new function omit that takes 2 parameter (source,keys)
 *  Create an empty object for newArray
 *
 * for each key in source
 *  if key is not included in keys
 *  set newArray[key] to source[key]
 *
 * return newArray
 */
function omit(source, keys) {
  const newArray = {};

  for (const key in source) {
    if (!keys.includes(key)) {
      newArray[key] = source[key];
    }
  }
  return newArray;
}
