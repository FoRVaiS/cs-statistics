const path = require('path');

const WebpackHtml = require('html-webpack-plugin');
const HtmlWebpackHarddisk = require('html-webpack-harddisk-plugin');
const { BundleAnalyzerPlugin: BundleAnalyzer } = require('webpack-bundle-analyzer');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const src = path.join(__dirname, 'src', 'client');
const templates = path.join(__dirname, 'templates');

const webRoot = path.join(__dirname, 'dist');
const assets = path.join(webRoot, 'assets');

module.exports = {
    stats: {
        all: undefined,
        assets: false,
        builtAt: false,
        cached: false,
        cachedAssets: false,
        children: false,
        chunks: false,
        chunkGroups: false,
        chunkModules: false,
        chunkOrigins: false,
        colors: false,
        context: path.join(__dirname, 'src', 'client'),
        depth: false,
        entrypoints: false,
        env: false,
        errors: false,
        errorDetails: false,
        hash: false,
        maxModules: 15,
        modules: false,
        moduleTrace: false,
        performance: false,
        providedExports: false,
        publicPath: false,
        reasons: false,
        timings: false,
        source: false,
        usedExports: false,
        warnings: false,
        version: false,
        assetsSort: 'field',
        chunksSort: 'field',
        modulesSort: 'field',
    },
    entry: {
        index: [path.join(src, 'Routes.tsx')],
    },
    output: {
        filename: '[hash]-[name].bundle.js',
        path: assets,
        publicPath: `/${path.relative(webRoot, assets)}/`,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            shared: path.join(src, '..', 'shared'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            configFile: 'src/client/tsconfig.json',
                        },
                    },
                ],
            },
            {
                test: /\.s?css$/,
                use: ['css-loader', 'postcss-loader', 'sass-loader'],
            },
            ...(!process.env.IS_STORYBOOK
                ? [
                    {
                        test: /\.(ttf)$/,
                        use: {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'resources/fonts',
                            },
                        },
                    },
                    {
                        test: /\.(png)$/,
                        use: {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'resources',
                            },
                        },
                    },
                ] : []
            ),
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            tsconfig: 'src/client/tsconfig.json',
            useTypescriptIncrementalApi: true,
        }),
        new WebpackHtml({
            template: path.join(templates, 'index.html'),
            filename: path.join(webRoot, 'index.html'),
            alwaysWriteToDisk: true,
        }),
        new HtmlWebpackHarddisk(),
        new BundleAnalyzer({
            analyzerMode: 'static',
            reportFilename: '../webpack-stats.html',
            openAnalyzer: false,
        }),
    ],
};
