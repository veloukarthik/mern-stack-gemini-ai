const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Step 1: Define the GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
    getAllUsers: [User]
    getUser(id: Int!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User,
    updateUser(id: Int!, name: String!, email: String!): User,
    deleteUser(id: Int!): User
  }
  
  type User {
    id: Int
    name: String
    email: String
  }
`);

const  users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// Step 2: Define resolver functions
const root = {
  hello: () => {
    return 'Hello, world!';
  },
  getAllUsers: () => {
    return users;
  },

  getUser: ({ id }) => {
    return users.find(user => user.id === id);
  },

  createUser: ({ name, email }) => {
    const newUser = { id: users.length + 1, name, email };
    const check = users.find(user => user.email === email);
    if (check) {
      throw new Error('Email already exists');
    }
    users.push(newUser);
    return newUser;
  },

  updateUser: ({ id, name, email }) => {
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    user.name = name;
    user.email = email;
    return user;
  },

  deleteUser: ({ id }) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    const deletedUser = users.splice(index, 1)[0];
    return deletedUser;
  }
  
 
};

// Step 3: Set up the Express server with the GraphQL middleware
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,  // Enables the GraphiQL UI to test queries
}));

app.listen(4000, () => {
  console.log('GraphQL server running at http://localhost:4000/graphql');
});
