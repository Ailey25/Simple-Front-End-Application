var path = require("path");
var config = {
  entry: ["./frontend.tsx", "./modal.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ["ts-loader"],
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
