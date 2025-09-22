import { readFileSync } from 'node:fs';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from "./resolvers/resolvers.js";
import { authMiddleware } from './middleware/authMiddleware.js';

const typeDefs = readFileSync('./src/graphql/schema/schema.graphql', 'utf8');
const app = express();
app.use(authMiddleware);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => req.authContext || { isAuthenticated: false }
});

(async () => {
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
})();
