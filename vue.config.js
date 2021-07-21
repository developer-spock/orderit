module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "",
    outputDir: "./dist",
    indexPath: "index.html",
    filenameHashing: false,
    pages: { app: { entry: "src/main.js"}},
    productionSourceMap: false,
    css: {
      extract: false
    },
    chainWebpack: config => {
      config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => {
        options.fallback.options.name = "img/[name].[ext]"
        return options
      })
      config.output.chunkFilename("[id].js")
    }
  }