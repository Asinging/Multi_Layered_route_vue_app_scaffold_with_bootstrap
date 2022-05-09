module.exports = {
  transpileDependencies: ["vuetify"],

  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",

  pwa: {
    iconPaths: {
      favicon32: "./public/1645784277.ico",
    },
  },

  configureWebpack: {},
};
