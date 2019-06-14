import React from 'react';

import { storiesOf } from '@storybook/react';
import {
    withKnobs, text, radios,
} from '@storybook/addon-knobs';

import Ticker from './Ticker';

storiesOf('Atoms|Ticker', module)
    .addDecorator(withKnobs)
    .add('renders a value with text describing the value', (): any => (
        <Ticker title={text('Title', 'Title')}>
            {text('Value', '1234657890')}
        </Ticker>
    ))
    .add('can display unit symbols next to the value', (): any => {
        const pSymbol: string = text('Symbol', '$');
        const pPosition: 'left' | 'right' = radios('Position', { Left: 'left', Right: 'right' }, 'left');

        return (
            <Ticker title="Value" unit={{ position: pPosition, symbol: pSymbol }}>
                12
            </Ticker>
        );
    });
