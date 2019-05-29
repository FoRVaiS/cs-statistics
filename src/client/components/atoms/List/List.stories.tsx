import React from 'react';

import { storiesOf } from '@storybook/react';

import List from './List';

const data = [
    {
        Name: 'Henrietta',
        'Miles Ran': 3.2,
    },
    {
        Name: 'Charlotte',
        'Miles Ran': 2.7,
    },
    {
        Name: 'Felix',
        'Miles Ran': 0.4,
    },
    {
        Name: 'Charles',
        'Miles Ran': 2.2,
    },
];

storiesOf('List', module)
    .add('displays data under their corresponding columns', (): any => (
        <List
            categories={[
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
