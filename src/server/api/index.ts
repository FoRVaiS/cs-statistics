import { mergeSchemas } from 'graphql-tools';

import { SteamProfileSchema as SteamProfile } from './SteamProfile';

export default mergeSchemas({
    schemas: [
        SteamProfile,
    ],
});
