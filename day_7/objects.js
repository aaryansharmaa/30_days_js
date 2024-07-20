const book = {
  title: "stoic",
  author: "marcus",
  year: "1884",
  getTitleAuthor: function () {
    return `${this.title} by ${this.author}`;
  },
  changeYear: function (y) {
    this.year = y;
  },
};

const library = {};

book.changeYear(2001);

console.log(book);

console.log(book.getTitleAuthor());

// NESTED OBJECTS

const library = {
  name: "City Library",
  address: "123 Library St, Knowledge City",
  books: [
    {
      title: "Stoic",
      author: "Marcus Aurelius",
      year: 1884,
      getTitleAndAuthor: function () {
        return `${this.title} by ${this.author}`;
      },
      getTitleAndYear: function () {
        return `${this.title} (${this.year})`;
      },
    },
    {
      title: "Meditations",
      author: "Marcus Aurelius",
      year: 200,
      getTitleAndAuthor: function () {
        return `${this.title} by ${this.author}`;
      },
      getTitleAndYear: function () {
        return `${this.title} (${this.year})`;
      },
    },
    {
      title: "The Republic",
      author: "Plato",
      year: 380,
      getTitleAndAuthor: function () {
        return `${this.title} by ${this.author}`;
      },
      getTitleAndYear: function () {
        return `${this.title} (${this.year})`;
      },
    },
  ],
  getBookTitles: function () {
    return this.books.map((book) => book.title).join(", ");
  },
};

// Log the library object to the console
console.log(library);

// Example of logging a specific book's title and author
console.log(library.books[0].getTitleAndAuthor());

// Log the result of calling the new method
console.log(library.books[0].getTitleAndYear());
console.log(library.books[1].getTitleAndYear());
console.log(library.books[2].getTitleAndYear());

// Function to log properties and values of a book using Object.keys and Object.values
function logBookProperties(book) {
  const keys = Object.keys(book);
  const values = Object.values(book);
}
