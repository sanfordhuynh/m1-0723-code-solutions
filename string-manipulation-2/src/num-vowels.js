/* exported numVowels */
function numVowels(string) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];

  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowel.includes(string[i].toLowerCase())) {
      counter++;
    }
  }
  return counter;
}
