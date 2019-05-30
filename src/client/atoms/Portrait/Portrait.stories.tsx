import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Portrait from './Portrait';

storiesOf('Portrait', module)
    .addDecorator(withKnobs)
    .add('renders a picture with text', (): any => (
        <Portrait
            src={text('Picture Src', 'https://via.placeholder.com/100x100')}
            name={text('Text', 'Portrait Text')}
        />
    ));
