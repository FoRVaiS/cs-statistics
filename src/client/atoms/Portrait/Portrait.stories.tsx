import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Portrait } from './Portrait';

storiesOf('Atoms|Portrait', module)
    .addDecorator(withKnobs)
    .add('renders a picture with text', (): any => (
        <div style={{
            margin: '0 auto',
            marginTop: '2rem',
            width: '11.5rem',
            '--portrait-img-width': '75%',
        }}
        >
            <Portrait
                src={text('Picture Src', 'https://via.placeholder.com/100x100')}
                name={text('Text', 'Portrait Text')}
            />
        </div>
    ));
