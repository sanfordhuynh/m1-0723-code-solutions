/* exported countdown */
function countdown(number) {
  const newArray = [];
  while (number >= 0) {
    newArray.push(number);
    number--;
  }
  return newArray;
}
