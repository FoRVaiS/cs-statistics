import React from 'react';

import { render, cleanup } from 'react-testing-library';

import Ticker from './Ticker';

afterEach(cleanup);

describe('The title', (): any => {
    it('should populate data-title when ticker is given a title', async (): Promise<any> => {
        const { container } = render(<Ticker title="MyTitle"><p>0</p></Ticker>);

        const ticker = await container.querySelector('.ticker');

        expect(ticker!.getAttribute('data-title')).toBe('MyTitle');
    });
});

describe('The value', (): any => {
    it('should display when ticker is given a value', async (): Promise<any> => {
        const { container } = render(<Ticker title=""><p>1234567890</p></Ticker>);

        const ticker = await container.querySelector('.ticker');

        expect(ticker!.innerHTML).toBe('1234567890');
    });
});

describe('The value unit', (): any => {
    describe('when given a symbol', (): any => {
        describe('and a position of right', (): any => {
            it('should display to the right value', async (): Promise<any> => {
                const { container } = render(<Ticker title="" unit={{ position: 'right', symbol: '%' }}><p>1234567890</p></Ticker>);

                const ticker = await container.querySelector('.ticker');

                expect(ticker!.innerHTML).toBe('1234567890%');
            });
        });

        describe('and a position of left', (): any => {
            it('should display to the left value', async (): Promise<any> => {
                const { container } = render(<Ticker title="" unit={{ position: 'left', symbol: '$' }}><p>1234567890</p></Ticker>);

                const ticker = await container.querySelector('.ticker');

                expect(ticker!.innerHTML).toBe('$1234567890');
            });
        });
    });
});
