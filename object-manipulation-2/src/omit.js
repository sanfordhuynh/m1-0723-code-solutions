/* exported omit */
function omit(source, keys) {
  const newArray = {};

  for (const key in source) {
    if (!keys.includes(key)) {
      newArray[key] = source[key];
    }
  }
  return newArray;
}
