import { configure } from '@storybook/react';

import '../src/client/Global.styles.scss';

const req = require.context('../src/client', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
