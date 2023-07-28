/* exported capitalizeWord */
function capitalizeWord(word) {
  const lowerCasedWord = word.toLowerCase();

  if (lowerCasedWord === 'javascript') {
    return 'JavaScript';
  }

  const firstLetter = word.charAt(0).toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();

  const capitalizedWord = firstLetter + restOfWord;
  return capitalizedWord;
}
