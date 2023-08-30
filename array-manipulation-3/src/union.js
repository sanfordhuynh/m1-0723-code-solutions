/* exported union */
function union(first, second) {
  const arrayResult = [];

  // pushes all the items of the first array
  for (const item of first) {
    if (!arrayResult.includes(item)) {
      arrayResult.push(item);
    }
  }

  // check if the current element is in the second array and not yet in the array result
  for (const item of second) {
    if (second.includes(item) && !arrayResult.includes(item)) {
      arrayResult.push(item);
    }
  }

  return arrayResult;
}
