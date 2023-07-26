const width = 150;
const height = 100;

const area = width * height;
console.log('value of area: ' + area);
console.log('typeof area: ' + typeof area);

const bill = 70;
const payment = 100;

const change = payment - bill;
console.log('value of change ' + change);
console.log('typeof change: ' + typeof change);

const quizzes = 3;
const midterm = 2;
const final = 1;

const grade = (quizzes + midterm + final) / 3;
console.log('value of grade ' + grade);
console.log('typeof grade: ' + typeof grade);

const firstName = 'Sanford';
const lastName = 'Huynh';

const fullName = firstName + ' ' + lastName;
console.log('value of fullName ' + fullName);
console.log('typeof fullName: ' + typeof fullName);

const ph = 8;
let isAcidic;

if (ph < 7) {
  isAcidic = true;
} else {
  isAcidic = false;
}

console.log('value of isAcidic: ' + isAcidic);
console.log('typeof isAcidic: ' + typeof isAcidic);

const headCount = 999;
let isSparta;

if (headCount === 300) {
  isSparta = true;
} else {
  isSparta = false;
}

console.log('value of isSparta: ' + isSparta);
console.log('typeof isSparta: ' + typeof isSparta);

let motto = fullName;
motto = motto + ' is the GOAT';

console.log('value of motto: ' + motto);
console.log('typeof motto: ' + typeof motto);
