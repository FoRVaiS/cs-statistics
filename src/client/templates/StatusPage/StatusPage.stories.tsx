import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';

import { StatusPage as StatusPageTemplate } from './StatusPage';

storiesOf('Templates|Status Page', module)
    .addDecorator(withKnobs)
    .add('renders a status page', (): any => (
        <StatusPageTemplate
            error={{
                code: number('Error Code', 404),
                text: text('Error Code Name', 'Page Not Found'),
            }}
        />
    ))
    .add('can optionally render a special message', (): any => (
        <StatusPageTemplate
            error={{
                code: number('Error Code', 404),
                text: text('Error Code Name', 'Page Not Found'),
            }}
        >
            <p>{text('Message', 'The page you were looking for was not found')}</p>
        </StatusPageTemplate>
    ));
