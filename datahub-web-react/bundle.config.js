const BundleAnalyzerPlugin = require('@bundle-analyzer/plugin');

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      token: process.env.CODECOV_TOKEN,
    }),
  ],
};
