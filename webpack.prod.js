/* eslint-disable @typescript-eslint/no-var-requires */

const ExtractTextPlugin = require('mini-css-extract-plugin');
const Uglify = require('uglifyjs-webpack-plugin');
const Compression = require('compression-webpack-plugin');

const { smartStrategy } = require('webpack-merge');

const commonConfig = require('./webpack.common');

const merge = smartStrategy({
    'module.rules.use': 'prepend',
    'out.filename': 'append',
});

module.exports = merge(commonConfig, {
    mode: 'production',
    stats: {
        assets: true,
        builtAt: true,
        cached: true,
        cachedAssets: true,
        chunkGroups: true,
        chunkModules: true,
        chunkOrigins: true,
        colors: true,
        depth: true,
        entrypoints: true,
        env: true,
        errors: true,
        errorDetails: true,
        hash: true,
        moduleTrace: true,
        performance: true,
        providedExports: true,
        publicPath: true,
        reasons: true,
        source: true,
        timings: true,
        usedExports: true,
        warnings: true,
        version: true,
        assetsSort: 'chunks',
    },
    devtool: 'source-map',
    output: {
        filename: '[contenthash]-[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [ExtractTextPlugin.loader],
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[contenthash]-[name].styles.css',
        }),
        new Uglify({
            test: /\.tsx?$/,
            exclude: /node_modules/,
            parallel: true,
            sourceMap: true,
        }),
        new Compression({
            test: /\.(js|css)$/,
            algorithm: 'gzip',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
});
