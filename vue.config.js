module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",

  pwa: {
    iconPaths: {
      // favicon32: "./public/1645784277.ico",
    },
  },

  configureWebpack: {
    // test: /\.(scss)$/,
    // use: [
    //   {
    //     loader: "style-loader", // inject CSS to page
    //   },
    //   {
    //     loader: "css-loader", // translates CSS into CommonJS modules
    //   },
    //   {
    //     loader: "postcss-loader", // Run post css actions
    //     options: {
    //       plugins: function () {
    //         // post css plugins, can be exported to postcss.config.js
    //         return [require("precss"), require("autoprefixer")];
    //       },
    //     },
    //   },
    //   {
    //     loader: "sass-loader", // compiles Sass to CSS
    //   },
    // ],
  },
};
