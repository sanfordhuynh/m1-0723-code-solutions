/* exported capitalize */
function capitalize(word) {
  const capitalize = word.charAt(0).toUpperCase();

  return capitalize + word.substring(1, word.length).toLowerCase();
}
