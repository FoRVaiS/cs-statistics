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
