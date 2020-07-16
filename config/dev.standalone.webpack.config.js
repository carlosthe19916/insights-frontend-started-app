const { resolve } = require('path');
const config = require('@redhat-cloud-services/frontend-components-config');

const rootFolder = resolve(__dirname, '../');
const { config: webpackConfig, plugins } = config({
    rootFolder,
    debug: true,
    https: true,
    htmlPlugin: { targetEnv: 'standalone' },
    port: 8003
});

module.exports = {
    ...webpackConfig,
    entry: {
        App: `${rootFolder}/src/entry-dev-standalone.js`
    },
    plugins
};
