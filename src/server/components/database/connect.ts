import mongoose, { Connection } from 'mongoose';

export default async ({
    URI, DB, USER, PASS,
}: { [keyName: string]: string }): Promise<Connection> => mongoose.createConnection(`mongodb://${URI}/${DB}`, {
    useNewUrlParser: true,
    user: USER,
    pass: PASS,
    authSource: 'admin',
});
