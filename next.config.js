const withPlugins = require('next-compose-plugins');
const { withContentlayer } = require('next-contentlayer');

const config = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['unsplash.com'],
  },
};

module.exports = withPlugins([withContentlayer], config);
