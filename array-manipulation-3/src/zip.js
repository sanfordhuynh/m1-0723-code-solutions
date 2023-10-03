/* exported zip */
function zip(first, second) {
  const resultArray = [];
  const minLength = Math.min(first.length, second.length);

  for (let i = 0; i < minLength; i++) {
    resultArray.push([first[i], second[i]]);
  }
  return resultArray;
}
