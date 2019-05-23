import { gql } from 'apollo-server-express';

export default gql`
    type SteamProfile {
        avatar: String!
        avatarfull: String!
        avatarmedium: String!
        cityid: String
        commentpermission: Int!
        communityvisibilitystate: Int!
        gameextrainfo: String
        gameid: String
        gameserverip: String
        lastlogoff: String!
        loccityid: String
        loccountrycode: String
        locstatecode: String
        personaname: String!
        personastate: Int!
        primaryclanid: String
        profilestate: Int!
        profileurl: String!
        realname: String
        steamid: String!
        timecreated: String
    }

    type Query {
        GetSteamProfile(id: String!): SteamProfile
    }
`;
