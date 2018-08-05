var path = require("path");
var config = {
  entry: ["./frontend.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "frontend.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
