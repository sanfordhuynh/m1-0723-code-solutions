/* exported invert */
function invert(source) {
  const placementHolder = {};

  for (const prop in source) {
    placementHolder[source[prop]] = prop;
  }
  return placementHolder;
}
