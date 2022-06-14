import { PrismaClient } from "@prisma/client";
import { ApolloServer, gql } from "apollo-server";

const client = new PrismaClient();

// The GraphQL schema
const typeDefs = gql`
  type RegExp {
    id: Int!
    RegExp: String!
    createAt: String!
    updateAt: String!
  }
  type Privacy {
    id: Int!
    Privacy: String!
    createAt: String!
    updateAt: String!
  }
  type NonPrivacy {
    id: Int!
    NonPrivacy: String!
    createAt: String!
    updateAt: String!
  }
  type Query {
    regExps: [RegExp]
    regExp(id: Int!): RegExp
    privacys: [Privacy]
    privacy(id: Int!): Privacy
    nonPrivacys: [NonPrivacy]
    nonPrivacy(id: Int!): NonPrivacy
  }
  type Mutation {
    createRegExp(RegExp: String!): RegExp
    createPrivacy(Privacy: String!): Privacy
    createNonPrivacy(NonPrivacy: String!): NonPrivacy
    deleteRegExp(id: Int!): RegExp
    deletePrivacy(id: Int!): Boolean
    deleteNonPrivacy(id: Int!): Boolean
    updateRegExp(id: Int! RegExp: String!): RegExp
    updatePrivacy(id: Int! Privacy: String!): Privacy
    updateNonPrivacy(id: Int! NonPrivacy: String!): NonPrivacy
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    regExps: () => client.regExp.findMany(),
    privacys: () => client.privacy.findMany(),
    nonPrivacys: () => client.nonPrivacy.findMany(),

    regExp: (_, { id }) => client.regExp.findUnique({ where: { id } }),
  },
  Mutation: {
    createRegExp: (_, { RegExp }) =>
      client.regExp.create({
        data: {
          RegExp,
        },
      }),
    createPrivacy: (_, { Privacy }) =>
      client.privacy.create({
        data: {
          Privacy,
        },
      }),
    createNonPrivacy: (_, { NonPrivacy }) =>
      client.regExp.create({
        data: {
          NonPrivacy,
        },
      }),

    deleteRegExp: (_, { id }) => client.regExp.delete({ where: { id } }),
    deletePrivacy: (_, { id }) => client.privacy.delete({ where: { id } }),
    deleteNonPrivacy: (_, { id }) => client.nonPrivacy.delete({ where: { id } }),

    updateRegExp: (_, { id, RegExp }) =>
      client.regExp.update({ where: { id }, data: { RegExp } }),
    updatePrivacy: (_, { id, Privacy }) =>
      client.privacy.update({ where: { id }, data: { Privacy } }),
    updateNonPrivacy: (_, { id, NonPrivacy }) =>
      client.nonPrivacy.update({ where: { id }, data: { NonPrivacy } }),
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(() => {
  console.log(`🚀 Server is running on http://localhost:4000/`);
});