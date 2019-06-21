import React from 'react';

import { storiesOf } from '@storybook/react';

import { List } from './List';

const data = [
    {
        ID: 6851,
        Name: 'Henrietta',
        'Miles Ran': 3.2,
    },
    {
        ID: 3127,
        Name: 'Charlotte',
        'Miles Ran': 2.7,
    },
    {
        ID: 3128,
        Name: 'Felix',
        'Miles Ran': 0.4,
    },
    {
        ID: 9702,
        Name: 'Charles',
        'Miles Ran': 2.2,
    },
];

storiesOf('Atoms|List', module)
    .add('displays data under their corresponding columns', (): any => (
        <List
            categories={[
                'ID',
                'Name',
                'Miles Ran',
            ]}
            data={data.sort((a, b): number => {
                if (a['Miles Ran'] < b['Miles Ran']) {
                    return 1;
                }

                if (a['Miles Ran'] > b['Miles Ran']) {
                    return -1;
                }

                return 0;
            })}
        />
    ));
