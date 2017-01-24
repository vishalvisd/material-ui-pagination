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
    "material-ui/svg-icons/navigation/ChevronLeft": {
      commonjs: "material-ui/svg-icons/navigation/ChevronLeft",
      commonjs2: "material-ui/svg-icons/navigation/ChevronLeft"
    },
    "material-ui/svg-icons/navigation/ChevronRight": {
      commonjs: "material-ui/svg-icons/navigation/ChevronRight",
      commonjs2: "material-ui/svg-icons/navigation/ChevronRight"
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