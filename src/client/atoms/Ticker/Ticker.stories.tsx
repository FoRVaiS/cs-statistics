import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Ticker from './Ticker';

storiesOf('Atoms|Ticker', module)
    .addDecorator(withKnobs)
    .add('renders a value with text describing the value', (): any => (
        <Ticker title={text('Title', 'Title')}>
            {text('Value', '1234657890')}
        </Ticker>
    ));
