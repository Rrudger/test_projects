// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: 'main.js',
  },
    devServer: {
      static: {
      directory: path.join(__dirname, 'public'),
    },
      host: 'localhost',
      open: true,
      allowedHosts:  ['all'],
       historyApiFallback: { index: "/", disableDotRule: true },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/assets/logo.png'
      }),
      new CopyPlugin({
      patterns: [
        {
        from: 'public/assets',
          to: 'assets'
        }
      ],
    }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
              test: /\.svg$/,
              use: ['@svgr/webpack'],
            },
            {
                test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
};
