/* exported getValues */
function getValues(object) {
  const values = [];
  for (const property in object) {
    values.push(object[property]);
  }
  return values;
}
