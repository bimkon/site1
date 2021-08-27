const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const fs = require('fs');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const pages = [];
fs
  .readdirSync(path.resolve(__dirname, 'src', 'pages'))
  .filter((file) => file.indexOf('base') !== 0)
  .forEach((file) => {
    pages.push(file.split('/', 2));
  });

const htmlPlugins = pages.map((fileName) => new HTMLWebpackPlugin({
  filename: `${fileName}.html`,
  template: `./src/pages/${fileName}/${fileName}.pug`,
  alwaysWriteToDisk: true,
  inject: 'body',
  hash: true,
}));
const optimization = () => {
  const config = {
    // splitChunks: {
    // chunks: 'all'
    // }
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

// Объект для быстрого обращения к путям
const PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'), // Куда ложить: __dirname - корневая директория, dist - папка куда все сложить
};

// Путm к страницам, чтобы взять все страницы в формате pug
const PAGES_DIR = `${PATHS.src}/pages/`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith('.pug'));

// Функция собирает имя для файлов в зависимости от мода сборки
const filename = (name, ext) => (isDev ? `${name}.${ext}` : `${name}.[hash].${ext}`);

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  resolve: {
    modules: [
      path.resolve(`${__dirname}/node_modules`),
      path.resolve(`${__dirname}/src`),
    ],
  },

  output: {
    filename: filename('[name]', 'js'), // Имя будет собирать функция
    path: PATHS.dist,
  },

  optimization: optimization(),

  devServer: {
    contentBase: PATHS.dist,
    port: 8081,
    // hot: isDev
    // stats: "errors-only"
  },

  plugins: [

    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/components/logo-toxin/img'),
        to: PATHS.dist,
      },
      {
        from: path.resolve(__dirname, 'src/components/logo-toxin/img'),
        to: PATHS.dist,
      },
    ]),
    new MiniCssExtractPlugin({
      filename: filename('[name]', 'css'),
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ].concat(htmlPlugins),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          'css-loader',
        ],
      },

      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          'css-loader',
          {
            loader: 'resolve-url-loader',
            options: {
              engine: 'rework',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {},
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: isDev,
        },
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [path.resolve(__dirname, 'src/assets/fonts/')],
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          publicPath: isDev ? '/fonts/' : '/site1/fonts/',
          outputPath: 'fonts/',
        },
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },
    ],
  },
};
