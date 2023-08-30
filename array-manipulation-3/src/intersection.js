/* exported intersection */
function intersection(first, second) {
  const arrayResult = [];

  // looping through the items of the first array
  // if the second array includes an item of the first array, push the element in the result
  for (const item of first) {
    if (second.includes(item)) {
      arrayResult.push(item);
    }
  }

  return arrayResult;
}
