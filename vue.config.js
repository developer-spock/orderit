module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/orderit/' : '/',
    outputDir: "docs",
    assetsDir: "assets",
    indexPath: "index.html",
    filenameHashing: false,
    configureWebpack:{
      performance: {
        hints: false
      },
      optimization: {
        splitChunks: {
          minSize: 10000,
          maxSize: 250000,
        }
      },
      module: {
        rules: [ {
          test: /\.md$/,
         loader: 'raw-loader', // npm install -D raw-loader
        }]
      }
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

      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Orderit'
        return args
      })
    },
    css : {
      loaderOptions : {
        sass : {
          additionalData: `
            @import "@/assets/scss/mixins/mixins.scss";
          `
        }
      }
    },
    devServer: {
      // https: true,
      // proxy: "https://localhost:8080"
    },
  }