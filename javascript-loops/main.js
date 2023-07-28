/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  let i = 0;
  while (i < 10) {
    numbers.push(currentNumber);
    currentNumber++;
    i++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  let i = 0;
  while (i < 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
    i += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function getKeys(object) {
  const keys = [];
  for (const property in object) {
    keys.push(property);
  }

  return keys;
}

function getValues(object) {
  const values = [];
  for (const property in object) {
    values.push(object[property]);
  }

  return values;
}
