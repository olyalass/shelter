const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: [path.join(__dirname, "../src/pages/main/", "main.js")],
    donate: [path.join(__dirname, "../src/pages/pets/", "pets.js")],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "../build"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/pages/main", "index.html"),
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/pages/pets", "index.html"),
      filename: "pets.html",
      chunks: ["pets"],
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [path.join(__dirname, "../assets")],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
