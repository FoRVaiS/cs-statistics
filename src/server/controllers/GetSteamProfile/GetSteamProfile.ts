import { UserInputError } from 'apollo-server-express';

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
    const sid = new SteamID(id);

    if (!sid.isValid()) throw new UserInputError(`"${id}" is not a valid Steam64 ID`);

    const steam64 = sid.getSteamID64();

    return { };
};
