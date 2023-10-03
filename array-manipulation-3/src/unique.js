/* exported unique */
function unique(array) {
  const arrayResult = [];

  if (array.length <= 0) {
    return [];
  } else {
    for (let i = 0; i < array.length; i++) {
      if (!arrayResult.includes(array[i])) {
        arrayResult.push(array[i]);
      }
    }
    return arrayResult;
  }
}
