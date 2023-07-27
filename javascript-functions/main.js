function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;

  return seconds;
}

const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('ConvertMinutesToSeconds output: ', convertMinutesToSecondsResult);

function greet(name) {
  const greetings = 'Hey, ' + name;
  return greetings;
}

const greetResult = greet('Beavis');
console.log('Greet output: ', greetResult);

function getArea(width, height) {
  const totalArea = width * height;
  return totalArea;
}

const getAreaTotal = getArea(17, 42);
console.log('GetAreaTotal output: ', getAreaTotal);

function getFirstName(person) {
  const firstName = person.firstName;
  return firstName;
}

const getFirstNameResult = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log('GetFirstNameResult output: ' + getFirstNameResult);

function getLastElement(array) {
  const lastElement = array[array.length - 1];
  return lastElement;
}

const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('GetLastElementResult: ', getLastElementResult);
