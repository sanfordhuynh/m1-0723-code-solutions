/* exported capitalizeWords */
function capitalizeWords(string) {
  const splitWord = string.split(/,?\s/);

  for (let i = 0; i < splitWord.length; i++) {
    const word = splitWord[i]; // splitWord is going to be each word in the string
    splitWord[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  const containsCommas = string.includes(',');

  if (containsCommas === true) {
    return splitWord.join(', ');
  } else {
    return splitWord.join(' ');
  }
}
