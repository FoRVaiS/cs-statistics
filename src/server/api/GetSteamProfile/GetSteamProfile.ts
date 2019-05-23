import { makeExecutableSchema } from 'apollo-server-express';

import { SteamProfile, QueryGetSteamProfileArgs } from 'shared/__generated__/graphql/types-server';
import GetSteamProfileController from '../../controllers/GetSteamProfileController/GetSteamProfileController';

import typeDefs from './GetSteamProfile.graphql';

export default makeExecutableSchema({
    typeDefs,
    resolvers: {
        Query: {
            GetSteamProfile: async (_, { id }: QueryGetSteamProfileArgs): Promise<SteamProfile> => GetSteamProfileController(id),
        },
    },
});
