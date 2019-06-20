import path from 'path';

import express from 'express';
import portfinder from 'portfinder';
import gzip from 'express-static-gzip';
import morgan from 'morgan';
import helmet from 'helmet';
import ejs from 'ejs';

import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import isdev from 'isdev';
import chalk from 'chalk';

import { HotModuleReplacement as HMR } from './components/webpack/HotModuleReplacement';
import { logger } from '../utilities/logger';
import api from './api';

const app: express.Express = express();

const root: string = process.cwd();
const webRoot: string = path.join(root, 'dist');
const assets: string = path.join(webRoot, 'assets');

(async (): Promise<void> => {
    try {
        const host: string = process.env.HOST || 'localhost';
        const port: number = await portfinder.getPortPromise({ port: parseInt(process.env.PORT || '8080', 10) });

        const URI = process.env.MONGODB_URI || '';
        const DB = (isdev ? `${process.env.MONGODB_DATABASE}-dev` : process.env.MONGODB_DATABASE) || '';

        const database: mongoose.Connection = await mongoose.createConnection(`mongodb://${URI}/${DB}`, {
            useNewUrlParser: true,
            user: process.env.MONGODB_USER || '',
            pass: process.env.MONGODB_PASS || '',
            authSource: 'admin',
        });

        app.use(helmet());
        app.use('/assets', (...data): void => {
            const [, res] = data;

            res.set({
                'Cache-Control': 'max-age=864000',
            });

            gzip(assets)(...data);
        });
        app.use(morgan('combined'));
        if (isdev) await HMR(app);

        const apolloQL: ApolloServer = new ApolloServer({
            schema: api,
            dataSources: (): { [key: string]: any } => ({
                database,
            }),
        });

        apolloQL.applyMiddleware({ app, path: '/graphql' });

        app.engine('html', ejs.renderFile);
        app.set('view engine', 'html');
        app.set('views', webRoot);

        app.get('*', (req, res): void => {
            res.render('index');
        });

        app.listen(port, host, (err: Error): void => {
            if (err) throw err;

            const secure = false;
            const protocol: string = `http${secure ? 's' : ''}`;
            const authority: string = host + (port !== 80 ? `:${port}` : '');

            if (!process.env.HOST) logger.warn("Environment variable 'HOST' is undefined, defaulting to 'localhost'");
            if (!process.env.PORT) logger.warn("Environment variable 'PORT' is undefined, defaulting to 8080 if available");
            if (isdev) logger.warn(`Running application in ${chalk.yellow('DEVELOPMENT')} mode`);
            logger.success(`Hosting on ${protocol}://${authority}/`);
        });
    } catch (e) {
        logger.error(e);
    }
})();
