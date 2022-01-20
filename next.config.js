/* eslint-disable no-param-reassign */

const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const path = require('path');

const localeSubpaths = {};

require('dotenv').config();

const nextConfig = withPlugins(
  [
    withCSS,
    [
      withSass,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 2,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
    [
      {
        workboxOpts: {
          swDest: process.env.NEXT_EXPORT
            ? 'service-worker.js'
            : 'static/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'offlineCache',
                expiration: {
                  maxEntries: 200,
                },
              },
            },
          ],
        },
        experimental: {
          async rewrites() {
            return [
              {
                source: '/service-worker.js',
                destination: '/_next/static/service-worker.js',
              },
            ];
          },
        },
      },
    ],
  ],
  {
    generateEtags: false,
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
      localeSubpaths,
    },
    webpack: (config, { dev }) => {
      config.resolve.alias['~'] = path.join(__dirname, '/');
      config.resolve.alias.libraries = path.join(__dirname, 'src/libraries');
      config.resolve.alias.components = path.join(__dirname, 'src/components');
      config.resolve.alias.containers = path.join(__dirname, 'src/containers');
      config.resolve.alias.layouts = path.join(__dirname, 'src/layouts');
      config.resolve.alias.styles = path.join(__dirname, 'src/styles');
      config.resolve.alias.utils = path.join(__dirname, 'src/utils');
      config.resolve.alias.hooks = path.join(__dirname, 'src/hooks');
      config.resolve.alias.routes = path.join(__dirname, 'src/routes');
      config.resolve.alias.store = path.join(__dirname, 'src/store');
      config.resolve.alias.constants = path.join(__dirname, 'src/constants');

      config.plugins.push(
        new FilterWarningsPlugin({
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
        }),
      );

      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              name: '[name]-[hash:8].[ext]',
              publicPath: (url) => {
                return `/_next/static/css/${url}`;
              },
              esModule: false,
            },
          },
        ],
      });

      config.module.rules.push({
        enforce: 'pre',
        test: /\.scss$/,
        loader: 'sass-resources-loader',
        options: {
          resources: [
            './src/styles/colorVars.scss',
            './src/styles/vars.scss',
            './src/styles/mixins.scss',
            './src/styles/typography.scss',
          ],
        },
      });

      if (!dev) {
        config.plugins.push(new OptimizeCSSAssetsPlugin({}));
      }

      return config;
    },
  },
);

module.exports = nextConfig;
