/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack');
const { smartStrategy } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const merge = smartStrategy({
    'module.rules.use': 'prepend',
});

module.exports = merge(commonConfig, {
    stats: {
        builtAt: true,
        colors: true,
        errors: true,
        timings: true,
        version: true,
    },
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: ['webpack-hot-middleware/client?reload=true'],
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ['style-loader'],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
