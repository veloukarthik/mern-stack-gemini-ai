const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const scheduleSchema = require('./schema/schema');

// Step 1: Define the GraphQL schema
const schema = scheduleSchema;

const authors = [
  { id: 1, name: 'John Doe', books: [] },  // Initially books array is empty
  { id: 2, name: 'Jane Smith', books: [] } // Initially books array is empty
];

const books = [
  { id: 1, title: 'Book 1', authors: [] }, // Initially authors array is empty
  { id: 2, title: 'Book 2', authors: [] }, // Initially authors array is empty
  { id: 3, title: 'Book 3', authors: [] }, // Initially authors array is empty
  { id: 4, title: 'Book 4', authors: [] }  // Initially authors array is empty
];

// Step 2: Link authors and books after both are initialized
authors[0].books.push(books[0], books[1]);  // John Doe has written Book 1 and Book 2
authors[1].books.push(books[2], books[3]);  // Jane Smith has written Book 3 and Book 4

books[0].authors.push(authors[0]);  // Book 1 was written by John Doe
books[1].authors.push(authors[0]);  // Book 2 was written by John Doe
books[2].authors.push(authors[1]);  // Book 3 was written by Jane Smith
books[3].authors.push(authors[1]);  // Book 4 was written by Jane Smith

const  users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// Step 2: Define resolver functions
const root = {
  hello: () => {
    return 'Hello, world!';
  },

  // Resolver for the "getAllUsers" field
  getAllUsers: () => {
    return users;
  },
  // Resolver for the "getUser" field
  getUser: ({ id }) => {
    return users.find(user => user.id === id);
  },
  // Resolver for the "createUser" field
  createUser: ({ name, email }) => {
    const newUser = { id: users.length + 1, name, email };
    const check = users.find(user => user.email === email);
    if (check) {
      throw new Error('Email already exists');
    }
    users.push(newUser);
    return newUser;
  },
  // Resolver for the "updateUser" field
  updateUser: ({ id, name, email }) => {
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    user.name = name;
    user.email = email;
    return user;
  },
  // Resolver for the "deleteUser" field
  deleteUser: ({ id }) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    const deletedUser = users.splice(index, 1)[0];
    return deletedUser;
  },

  //
  getAllBooks: () => {
    return books;
  },
  getBook: ({ id }) => {
    return books.find(book => book.id === id);
  },
  createBook: ({ title, authors }) => {
    const newBook = { id: books.length + 1, title, authors };
    books.push(newBook);
    return newBook;
  },
  updateBook: ({ id, title, authors }) => {
    console.log(authors);
    const book = books.find(book => book.id === id);
    if (!book) {
      throw new Error('Book not found');
    }
    book.title = title;
    book.authors = authors;
    return book;
  },
  deleteBook: ({ id }) => {
    const index = books.findIndex(book => book.id === id);
    if (index === -1) {
      throw new Error('Book not found');
    }
    const deletedBook = books.splice(index, 1)[0];
    return deletedBook;
  },

  getAllAuthors: () => {
    return authors;
  },
  getAuthor: ({ id }) => {
    return authors.find(author => author.id === id);
  },
  createAuthor: ({ name, books }) => {
    const newAuthor = { id: authors.length + 1, name, books };
  },
  updateAuthor: ({ id, name, books }) => {
    const author = authors.find(author => author.id === id);
    if (!author) {
      throw new Error('Author not found');
    }
    author.name = name;
    author.books = books;
    return author;
  },
  deleteAuthor: ({ id }) => {
    const index = authors.findIndex(author => author.id === id);
    if (index === -1) {
      throw new Error('Author not found');
    }
    const deletedAuthor = authors.splice(index, 1)[0];
    return deletedAuthor;
  }

};

// Step 3: Set up the Express server with the GraphQL middleware
const app = express();

function authenticate(req, res, next) {
  const token = req.headers.authorization || req.query.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
}

app.use(authenticate);
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,  // Enables the GraphiQL UI to test queries
}));

app.listen(4000, () => {
  console.log('GraphQL server running at http://localhost:4000/graphql');
});
