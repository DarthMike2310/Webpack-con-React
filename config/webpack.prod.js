const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

/** @type {import('webpack').Configuration} */
const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
      },
    },
  },
  output: {
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' }
          },
          'css-loader',
          'sass-loader'
        ],
        test: /\.(css|sass|scss)$/i,
      },
    ],
  },
};

module.exports = merge(common, prodConfig);