import axios from 'axios';

import GetSteamProfile from './GetSteamProfileController';

jest.mock('axios');

const fakeAxios = axios as jest.Mocked<typeof axios>;

// It is possible to NOT test implementation for a controller?

beforeEach((): void => {
    jest.clearAllMocks();

    process.env.STEAMWEB_API_KEY = 'key';

    fakeAxios.get.mockImplementation((): Promise<any> => Promise.resolve({
        data: {
            response: {
                success: 1,
                steamid: '76561197960434622',
            },
        },
    }));
});

describe('The controller', (): void => {
    it('should resolve vanity urls', async (): Promise<void> => {
        await GetSteamProfile('vanity');

        expect(fakeAxios.get).toBeCalledWith('https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/', {
            params: {
                key: process.env.STEAMWEB_API_KEY,
                vanityurl: 'vanity',
            },
        });
    });
});
