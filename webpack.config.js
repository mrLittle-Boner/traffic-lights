const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: '/src/index.js',
  output: {
    publicPath: 'auto',
    path:path.resolve(__dirname, "dist"),
    filename: "[contenthash].js",
    clean: true
  },
  mode: 'development',
  devServer: {
    static: './dist',
    hot: true,
    historyApiFallback: true 
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: file => ( /node_modules/.test(file) && !/\.vue\.js/.test(file))
      },
      {
        test: /\.css?/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
    }),
  ]
}