const path = require("path");
const base = require("./base.webpack.js");

module.exports = {
  ...base,
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "../build"),
    publicPath: "/olyalass-JSFE2023Q1/shelter/build/",
  },
};
