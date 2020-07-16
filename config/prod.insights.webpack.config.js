const { resolve } = require('path');
const config = require('@redhat-cloud-services/frontend-components-config');

const rootFolder = resolve(__dirname, '../');
const { config: webpackConfig, plugins } = config({
    rootFolder: resolve(__dirname, '../'),
    htmlPlugin: { targetEnv: 'insights' }
});

module.exports = {
    ...webpackConfig,
    entry: {
        App: `${rootFolder}/src/entry-insights.js`
    },
    plugins
};
