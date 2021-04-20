const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');
const SpeakerAPI = require('./datasources/speakers');

const typeDefs = require('./schema.js');

const resolvers = require('./resolvers.js');

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI(),
});

//introspections: false disables schema & docs in playground, playground: false disables playground
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  // introspections: false,
  // playground: false
});

server.
  listen({ port: process.env.PORT || 4000 })
  .then(({url}) => {
    console.log(`GraphQL running at ${url}`);
  })
