import { mergeSchemas } from 'graphql-tools';

import SteamProfile from './SteamProfile/SteamProfile';

export default mergeSchemas({
    schemas: [
        SteamProfile,
    ],
});
