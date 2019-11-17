const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const HOT_PATH = 'webpack/hot/poll?3000';

const hotReloadPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = function(options) {
  return {
    ...options,
    entry: [HOT_PATH, './src/main.ts'],
    mode: 'development',
    watch: true,
    externals: [
      nodeExternals({ whitelist: [HOT_PATH] }),
    ],
    plugins: [...options.plugins, hotReloadPlugin],
  };
};
