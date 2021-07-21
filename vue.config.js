module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "",
    outputDir: "./dist",
    indexPath: "index.html",
    filenameHashing: false,
    pages: { app: { entry: "src/main.js"}},
    productionSourceMap: false,
    css: {
      extract: false
    }
  }