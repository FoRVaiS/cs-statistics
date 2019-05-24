import React from 'react';

import { render, cleanup } from 'react-testing-library';

import PlayerPortrait from './PlayerPortrait';

afterEach(cleanup);

describe('The picture', (): void => {
    it('should be given the correct image src', async (): Promise<void> => {
        const { findByTestId } = render(<PlayerPortrait src="path/to/image" playerName="" />);

        const playerPortrait = await findByTestId('portrait');

        expect(playerPortrait.getAttribute('src')).toBe('path/to/image');
    });

    it('should set the alt attribute', async (): Promise<void> => {
        const { findByTestId } = render(<PlayerPortrait src="path/to/image" playerName="Player" />);

        const playerPortrait = await findByTestId('portrait');

        expect(playerPortrait.getAttribute('alt')).toBe("Player's profile picture");
    });
});
