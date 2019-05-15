const merge = require('webpack-merge');

const devConfig = require('../webpack.dev');

module.exports = ({ config }) => merge(config, {
    module: devConfig.module,
    resolve: devConfig.resolve,
});
