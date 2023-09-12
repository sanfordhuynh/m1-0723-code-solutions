const books = [
  {
    isbn: 9781400090686,
    title: 'Eragon',
    author: 'Christopher Paloni',
  },
  {
    isbn: 9781400090681,
    title: "Plato's Philosophy",
    author: 'Plato',
  },
  {
    isbn: 9780140817744,
    title: '1984',
    author: 'George Orwell',
  },
];

console.log('Book Array: ', books);
console.log('Type: ', typeof books);

const booksJSONString = JSON.stringify(books);

console.log('JSON string of books: ', booksJSONString);
console.log('Type of booksJSON: ', typeof booksJSONString);

const jsonString = '{"id": 1234567, "name": "Sanford Huynh"}';

console.log('JSON String: ', jsonString);
console.log('Type of JSON String: ', typeof jsonString);

const jsonParse = JSON.parse(jsonString);

console.log('JSON Parse: ', jsonParse);
console.log('Type of JSON parse: ', typeof jsonParse);
