/* exported lastChars */
function lastChars(length, string) {
  if (string.length <= length) {
    return string;
  }

  const splitPosition = string.length - length; // position is where word splits
  const lastChars = string.slice(splitPosition);

  return lastChars;
}
