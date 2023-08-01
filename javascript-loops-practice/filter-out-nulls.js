/* exported filterOutNulls */
function filterOutNulls(values) {
  const filter = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] === null) {
      continue;
    } else {
      filter.push(values[i]);
    }
  }
  return filter;
}
