import { configure } from '@storybook/react';

import '@storybook/addon-knobs/register';

const req = require.context('../src/client', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
