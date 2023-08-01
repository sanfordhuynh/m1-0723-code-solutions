/* exported filterOutStrings */
function filterOutStrings(values) {
  const filter = [];

  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'string') {
      continue;
    } else {
      filter.push(values[i]);
    }
  }
  return filter;
}
