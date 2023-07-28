/* exported firstChars */
function firstChars(length, string) {
  const array = [];

  for (let i = 0; i < string.length; i++) {
    if (i < length) {
      array.push(string[i]);
    }
  }
  return array.join('');
}
