const books = {
  b001: { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
  b002: { title: "1984", price: 15.99, isAvailable: false },
  b003: { title: "The Great Gatsby", price: 12.49, isAvailable: true },
  b004: { title: "Moby Dick", price: 22.5, isAvailable: false },
};

/*
  Challenge:
    1. Use Object.keys to get an array of keys. 
       You can store it in a const 'bookKeys'. 
    2. Iterate over bookKeys twice.
       A) First log each individual key in the array.
       B) Then log only the book titles.
  */

const bookKeys = Object.keys(books);
// bookKeys.forEach(key => console.log(key))
// bookKeys.forEach((key) => console.log(books[key].title));

/*
  Output: b001
          b002
          b003
          b004
  Output: To Kill a Mockingbird
          1984
          The Great Gatsby
          Moby Dick
  */
// -----
// const bookValues = Object.values(books)
// bookValues.forEach(value => console.log(value.title))
// -----

// Object.entries returns an array of arrays, where each inner 
// array contains two elements: the key and the value of each 
// property in the object.

const bookEntries = Object.entries(books)
const filteredBooks = bookEntries.filter(book => book[1].price > 16)
console.log(filteredBooks)
/*
Challenge:
  1. Use Object.entries to create an array from 'books'.
  2. Use an array method to filter out the books 
     which cost less than 16.
  3. Iterate over the remaining books and log a string 
     for each book in this format:
     ID: b001 Book: To Kill a Mockingbird £18.99
Bonus points:
  1. Make your code DRYer by destructuring the array 
     where it is passed into a method.
  2. Chain the array methods together.
*/


/*
    Expected Output:
    ID: b001 Book: To Kill a Mockingbird £18.99
    ID: b004 Book: Moby Dick £22.5
*/