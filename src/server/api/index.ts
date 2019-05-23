import { mergeSchemas } from 'graphql-tools';

import HelloWorld from './HelloWorld/HelloWorld';
import GetSteamProfile from './GetSteamProfile/GetSteamProfile';

export default mergeSchemas({
    schemas: [
        HelloWorld,
        GetSteamProfile,
    ],
});
