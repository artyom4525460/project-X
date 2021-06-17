if (process.env.NODE_ENV == 'development') {
  module.exports = {
    chainWebpack: config => {
      config.plugin('html').tap(([options]) => [
        Object.assign(options, {
          template: 'public/dev.html'
        }),
      ])
    }
  }
}

if (process.env.NODE_ENV == 'production') {
  module.exports = {
    outputDir: '../../public/spa',
    publicPath: process.env.APP_URL + '/spa',
    indexPath: '../../resources/views/iframe.blade.php',
  }
}