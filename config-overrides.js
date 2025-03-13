const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function override(config) {
  // Add fallbacks for Node.js core modules
  config.resolve.fallback = {
    path: require.resolve('path-browserify'),
    os: require.resolve('os-browserify/browser'),
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    util: require.resolve('util'),
    buffer: require.resolve('buffer'),
    https: require.resolve('https-browserify'),
    http: require.resolve('stream-http'),
    zlib: require.resolve('browserify-zlib'),
    vm: require.resolve('vm-browserify'),
    url: require.resolve('url'),
    querystring: require.resolve('querystring-es3'),
    fs: false, // Disable 'fs' module (not needed in the browser)
    constants: require.resolve('constants-browserify'),
    child_process: false, // Disable 'child_process' module (not needed in the browser)
    worker_threads: false, // Disable 'worker_threads' module (not needed in the browser)
    module: false, // Disable 'module' module (not needed in the browser)
    tty: require.resolve('tty-browserify'), // Add tty polyfill
  };

  // Exclude .d.ts files from being processed
  config.module.rules.push({
    test: /\.d\.ts$/,
    loader: 'ignore-loader',
  });

  // Configure TerserPlugin to use only the default minifier
  config.optimization.minimizer = [
    new TerserPlugin({
      minify: TerserPlugin.terserMinify, // Use the default Terser minifier
      terserOptions: {
        compress: true,
        mangle: true,
      },
    }),
  ];

  // Suppress warnings related to esbuild
  config.ignoreWarnings = [
    { module: /esbuild/ },
  ];

  // Suppress deprecation warnings for webpack-dev-server
  process.env.NODE_ENV = 'development';

  return config;
};