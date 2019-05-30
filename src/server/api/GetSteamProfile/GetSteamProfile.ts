import { makeExecutableSchema, ApolloError } from 'apollo-server-express';

import { SteamProfile, QueryGetSteamProfileArgs } from 'generated/graphql/types-server';
import isdev from 'isdev';

import GetSteamProfileController from '../../controllers/GetSteamProfileController/GetSteamProfileController';

import typeDefs from './GetSteamProfile.graphql';

class DevModeError extends ApolloError {
    public constructor(message: string, properties?: Record<string, any>) {
        super(message, 'SERVER_DEV_MODE', properties);

        Object.defineProperty(this, 'name', { value: 'DevModeError' });
    }
}

export default makeExecutableSchema({
    typeDefs,
    resolvers: {
        Query: {
            GetSteamProfile: async (_, { id }: QueryGetSteamProfileArgs): Promise<SteamProfile> => {
                if (isdev) throw new DevModeError('Steam Profile queries not permitted in development mode');

                return GetSteamProfileController(id);
            },
        },
    },
});
