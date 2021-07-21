module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/orderit/' : '/',
    outputDir: "./docs",
    indexPath: "index.html",
    filenameHashing: false,
    chainWebpack: config => {
      config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => {
        options.fallback.options.name = "img/[name].[ext]"
        return options
      })
    }
  }