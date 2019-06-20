import React from 'react';

import { render, cleanup } from 'react-testing-library';

import { Ticker } from './Ticker';

afterEach(cleanup);

it('The title should populate data-title when ticker is given a title', async (): Promise<any> => {
    const { container } = render(<Ticker title="MyTitle"><p>0</p></Ticker>);

    const ticker = await container.querySelector('.ticker__content');

    expect(ticker!.getAttribute('data-title')).toBe('MyTitle');
});

it('The value should display when ticker is given a value', async (): Promise<any> => {
    const { container } = render(<Ticker title=""><p>1234567890</p></Ticker>);

    const ticker = await container.querySelector('.ticker__content');

    expect(ticker!.innerHTML).toBe('1234567890');
});
