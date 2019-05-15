import { mergeSchemas } from 'graphql-tools';

import HelloWorld from './HelloWorld/HelloWorld';

export default mergeSchemas({
    schemas: [
        HelloWorld,
    ],
});
