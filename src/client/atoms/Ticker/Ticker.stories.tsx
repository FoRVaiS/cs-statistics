import React from 'react';

import { storiesOf } from '@storybook/react';
import {
    withKnobs, text, number, radios,
} from '@storybook/addon-knobs';

import Ticker from './Ticker';

storiesOf('Atoms|Ticker', module)
    .addDecorator(withKnobs)
    .add('renders a numerical value with text describing the value', (): any => (
        <Ticker title={text('Title', 'Title')} value={number('Value', 1234657890)} />
    ))
    .add('can display unit symbols next to the value', (): any => {
        const pSymbol: string = text('Symbol', '$');
        const pPosition: 'left' | 'right' = radios('Position', { Left: 'left', Right: 'right' }, 'left');

        return (
            <Ticker title="Value" value={12} unit={{ position: pPosition, symbol: pSymbol }} />
        );
    });
