const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const app = express();

const typeDefs = require("./graphql/typedefs");
const resolvers = require("./graphql/resolvers");

let server = null;

async function StartServer() {
  server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app });
}

StartServer();

app.listen(
  {
    port: 4000,
  },
  () => console.log(`🚀 Server ready at http://localhost:4000`)
);
