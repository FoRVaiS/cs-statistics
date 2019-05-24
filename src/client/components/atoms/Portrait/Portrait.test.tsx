import React from 'react';

import { render, cleanup } from 'react-testing-library';

import Portrait from './Portrait';

afterEach(cleanup);

describe('The picture', (): void => {
    it('should be given the correct image src', async (): Promise<void> => {
        const { findByTestId } = render(<Portrait src="path/to/image" name="" />);

        const portrait = await findByTestId('portrait');

        expect(portrait.getAttribute('src')).toBe('path/to/image');
    });

    it('should set the alt attribute', async (): Promise<void> => {
        const { findByTestId } = render(<Portrait src="path/to/image" name="Player" />);

        const portrait = await findByTestId('portrait');

        expect(portrait.getAttribute('alt')).toBe('Player');
    });
});

describe('The name', (): void => {
    it('should be set to the name prop', async (): Promise<void> => {
        const { findByTestId } = render(<Portrait src="" name="Player" />);

        const portraitName = await findByTestId('name');

        expect(portraitName.innerHTML).toBe('Player');
    });
});
