const firstNum = 5;
const secondNum = 200;
const thirdNum = 741;

const maximumValue = Math.max(firstNum, secondNum, thirdNum);
console.log('The maximumValue is: ', maximumValue);

const heroes = ['Superman', 'Batman', 'Robin', 'Aquamen'];

let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

const randomIndex = Math.floor(randomNumber);
console.log('Random Index: ', randomIndex);

const randomHero = heroes[randomIndex];
console.log('The Random Hero is: ', randomHero);

const library = [
  {
    title: 'Harry potter',
    author: 'JK Rowling',
  },
  {
    title: 'Eragon',
    author: ' Christopher Paolini',
  },
  {
    title: 'Magic School Bus',
    author: ' Christopher Paolini',
  },
];
const lastBook = library.pop();
console.log('The last book is: ', lastBook);

const firstBook = library.shift();
console.log('The first book is: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log(library);

const fullName = 'Sanford Huynh';

const firstAndLastName = fullName.split(' ');
console.log('The First and Last Name is: ' + firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log(sayMyName);
