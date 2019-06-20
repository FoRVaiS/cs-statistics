import express from 'express';
import webpack from 'webpack';
import wpDevMiddleware from 'webpack-dev-middleware';
import wpHotMiddleware from 'webpack-hot-middleware';

import wpDevConfigFile from '../../../../webpack.dev';

const wpDevConfig: webpack.Configuration = wpDevConfigFile;
const compiler: webpack.Compiler = webpack(wpDevConfig);

export const HotModuleReplacement = (app: express.Express): Promise<void> => new Promise((resolve): void => {
    const { publicPath = '/' } = wpDevConfig.output || {};

    app.use(wpDevMiddleware(compiler, {
        stats: wpDevConfig.stats,
        publicPath,
    }));
    app.use(wpHotMiddleware(compiler));

    compiler.hooks.done.tap('ExpressHMR', (): void => {
        resolve();
    });
});
