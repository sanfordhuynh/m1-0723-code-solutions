/* exported ransomCase */
function ransomCase(string) {
  const randomCase = [];

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      randomCase.push(string[i].toLowerCase());
    } else {
      randomCase.push(string[i].toUpperCase());
    }
  }
  return randomCase.join('');
}
