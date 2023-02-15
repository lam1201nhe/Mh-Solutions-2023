/** @type {import('next').NextConfig} */
// const path = require('path');
const nextConfig = {
  reactStrictMode: false,
  // webpack: (config) => ({
  //   ...config,
  //   module: {
  //     ...config.module,
  //     rules: [
  //       ...config.module.rules,
  //       {
  //         test: /\.scss$/,
  //         use: ["style-loader", "css-loader", "sass-loader"],
  //         include: path.resolve(__dirname, "./"),
  //       },
  //       {
  //         test: /\.s[ac]ss$/i,
  //         use: {
  //           loader: "sass-loader",
  //           options: {
  //             additionalData: '@import "src/styles/variables.scss";',
  //           },
  //         },
  //       },
  //     ],
  //   },
  // }),
};

module.exports = nextConfig;
