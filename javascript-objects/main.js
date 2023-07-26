const student = {
  firstName: 'Sanford',
  lastName: 'Huynh',
  age: 26,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fuilName: ' + fullName);

student.livesInIrvine = false;
console.log('Value of student.livesInIrvine: ' + student.livesInIrvine);

student.previousOccupation = 'Cloud Support';
console.log(
  'Value of student.previousOccupation: ' + student.previousOccupation
);

console.log('Value of student: ' + JSON.stringify(student));

const vehicle = {
  make: 'lexus',
  model: 'LC',
  year: 2023,
};

vehicle['color'] = 'green';
vehicle['isConvertible'] = false;

console.log('Value of vehicle[color]: ' + vehicle['color']);
console.log('Value of vehicle[isConvertible]: ' + vehicle['isConvertible']);
console.log('Value of vehicle: ' + JSON.stringify(vehicle));

const pet = {
  name: 'marsh',
  type: 'frog',
};

delete pet.name;
delete pet.type;

console.log('Value of pet: ' + JSON.stringify(pet));
