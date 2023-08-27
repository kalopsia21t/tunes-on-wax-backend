const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Record {
    id: ID!
    artist: String
    title: String
    catalogueNumber: String
    year: String
  }

  input RecordInput {
    artist: String
    title: String
    catalogueNumber: String
    year: String
  }

  type Query {
    getRecord(id: ID): Record
    getRecords: [Record]
  }

  type Mutation {
    createRecord(recordInput: RecordInput): Record
  }
`;

module.exports = typeDefs;
