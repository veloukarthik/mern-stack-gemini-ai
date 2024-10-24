const { buildSchema } = require('graphql');

const scheduleSchema = buildSchema(`
type Query {
  hello: String
  getAllUsers: [User]
  getUser(id: Int!): User
  getAllBooks: [Book]
  getBook(id: Int!): Book
  getAllAuthors: [Author]
  getAuthor(id: Int!): Author
}

type Mutation {
  createUser(name: String!, email: String!): User,
  updateUser(id: Int!, name: String!, email: String!): User,
  deleteUser(id: Int!): User
  createBook(title: String!, authors: [Int!]!): Book
  updateBook(id: Int!, title: String!, authors: [Int!]!): Book
  deleteBook(id: Int!): Book
  createAuthor(name: String!, books: [Int!]!): Author
  updateAuthor(id: Int!, name: String!, books: [Int!]!): Author
  deleteAuthor(id: Int!): Author
}

type User {
  id: Int
  name: String
  email: String
}
type Book {
  id: Int
  title: String
  authors: [Author]
}
type Author {
  id: Int
  name: String
  books: [Book]
}
`);

module.exports = scheduleSchema;