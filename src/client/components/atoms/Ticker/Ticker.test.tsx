import React from 'react';

import { render, cleanup } from 'react-testing-library';

import Ticker from './Ticker';

afterEach(cleanup);

describe('The title', (): any => {
    it('should populate data-title when ticker is given a title', async (): Promise<any> => {
        const { findByTestId } = render(<Ticker title="MyTitle" value={0} />);

        const ticker = await findByTestId('ticker');

        expect(ticker.getAttribute('data-title')).toBe('MyTitle');
    });
});
