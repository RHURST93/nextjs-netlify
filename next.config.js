/** @type {import('next').NextConfig} */
const nextConfig = {
    
}

module.exports = nextConfig

const path = require('path');

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/files/[name][ext]',
      },
    });

    return config;
  },
};