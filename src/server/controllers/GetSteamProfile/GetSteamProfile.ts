import { UserInputError } from 'apollo-server-express';

import axios from 'axios';
import SteamID from 'steamid';

interface ISteamProfile {
    [key: string]: number | string | undefined

    avatar: string
    avatarfull: string
    avatarmedium: string
    cityid?: string
    commentpermission: number
    communityvisibilitystate: number
    gameextrainfo?: string
    gameid?: string
    gameserverip?: string
    lastlogoff: string
    loccityid?: string
    loccountrycode?: string
    locstatecode?: string
    personaname: string
    personastate: number
    primaryclanid?: string
    profilestate: number
    profileurl: string
    realname?: string
    steamid: string
    timecreated?: string
}

export default async (id: string): Promise<ISteamProfile> => {
    let steam64 = null;

    try {
        const sid = new SteamID(id);

        if (!sid.isValid()) throw new UserInputError(`"${id}" is not a valid Steam64 ID`);

        steam64 = sid.getSteamID64();
    } catch {
        const { data: { response: resolveVanityData } } = await axios.get('https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/', {
            params: {
                key: process.env.STEAMWEB_API_KEY,
                vanityurl: id,
            },
        });

        if (resolveVanityData.success !== 1) throw new UserInputError(`"${id}" is not a valid custom url`);

        steam64 = resolveVanityData.steamid;
    }

    return { };
};
