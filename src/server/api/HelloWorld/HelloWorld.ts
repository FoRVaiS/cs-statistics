import { makeExecutableSchema } from 'apollo-server-express';

import greetController from '../../controllers/greetController/greetController';

import typeDefs from './HelloWorld.graphql';

export default makeExecutableSchema({
    typeDefs,
    resolvers: {
        Query: {
            greet: greetController,
        },
    },
});
