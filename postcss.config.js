/* eslint-disable @typescript-eslint/no-var-requires */

const Autoprefixer = require('autoprefixer');
const Prettier = require('postcss-prettify');

const isdev = require('isdev');

const developmentPlugins = [Prettier];
const productionPlugins = [];
const commonPlugins = [Autoprefixer];

module.exports = {
    parser: 'postcss-scss',
    plugins: [...commonPlugins, ...(isdev ? developmentPlugins : productionPlugins)],
};
