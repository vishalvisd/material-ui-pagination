module.exports = [{
  entry: {
    index: "./src/pagination.js"
  },
  output: {
    filename: "[name].js",
    libraryTarget: "umd",
    library: "material-ui-pagination"
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react"
    },
    "material-ui": {
      commonjs: "material-ui",
      commonjs2: "material-ui"
    },
    "material-ui/svg-icons/navigation": {
      commonjs: "material-ui/svg-icons/navigation",
      commonjs2: "material-ui/svg-icons/navigation"
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel?presets[]=es2015,presets[]=react,plugins[]=transform-object-rest-spread"
      }
    ]
  }
}];