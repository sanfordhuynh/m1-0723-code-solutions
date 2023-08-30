/* exported difference */
function difference(first, second) {
  const arrayResult = [];

  for (const item of first) {
    if (!second.includes(item) && !arrayResult.includes(item)) {
      arrayResult.push(item);
    }
  }

  for (const item of second) {
    if (!first.includes(item) && !arrayResult.includes(item)) {
      arrayResult.push(item);
    }
  }

  return arrayResult;
}
