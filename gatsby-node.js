const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve:{
      fallback: {
        timers: require.resolve("timers-browserify"),
        zlib:  require.resolve("browserify-zlib")
      }
    },
    plugins: [
      new FilterWarningsPlugin({
        exclude:
          /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  });
};