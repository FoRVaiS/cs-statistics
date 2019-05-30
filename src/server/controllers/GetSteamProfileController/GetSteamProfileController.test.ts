import axios from 'axios';

import GetSteamProfile from './GetSteamProfileController';

jest.mock('axios');

const fakeAxios = axios as jest.Mocked<typeof axios>;

// It is possible to NOT test implementation for a controller?

beforeEach((): void => {
    jest.clearAllMocks();

    process.env.STEAMWEB_API_KEY = 'key';

    fakeAxios.get.mockImplementation((url: string): Promise<any> => {
        if (url === 'https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/') {
            return Promise.resolve({
                data: {
                    response: {
                        success: 1,
                        steamid: '76561197960434622',
                    },
                },
            });
        }

        if (url === 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/') {
            return Promise.resolve({
                data: {
                    response: {
                        players: [
                            {
                                avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fd/fdaef0111714471445bb422b8021d3a887c86a99.jpg',
                                avatarfull: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fd/fdaef0111714471445bb422b8021d3a887c86a99_full.jpg',
                                avatarmedium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fd/fdaef0111714471445bb422b8021d3a887c86a99_medium.jpg',
                                commentpermission: 1,
                                communityvisibilitystate: 3,
                                lastlogoff: '1559198657',
                                personaname: 'al',
                                personastate: 4,
                                profilestate: 1,
                                profileurl: 'https://steamcommunity.com/id/afarnsworth/',
                                steamid: '76561197960434622',
                            },
                        ],
                    },
                },
            });
        }

        return Promise.resolve(null);
    });
});

describe('The controller', (): void => {
    // Had trouble trying to mock the SteamID class
    it.todo('should verify steam64 ids');

    it('should resolve vanity urls', async (): Promise<void> => {
        await GetSteamProfile('vanity');

        expect(fakeAxios.get).toBeCalledWith('https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/', {
            params: {
                key: process.env.STEAMWEB_API_KEY,
                vanityurl: 'vanity',
            },
        });
    });

    it('should fetch a player profile', async (): Promise<void> => {
        await GetSteamProfile('76561197960434622');

        expect(fakeAxios.get).toBeCalledWith('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/', {
            params: {
                key: process.env.STEAMWEB_API_KEY,
                steamids: '76561197960434622',
            },
        });
    });
});
