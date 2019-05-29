import { mergeSchemas } from 'graphql-tools';

import GetSteamProfile from './GetSteamProfile/GetSteamProfile';

export default mergeSchemas({
    schemas: [
        GetSteamProfile,
    ],
});
