module.exports = {
  lintOnSave: true,
  productionSourceMap: process.env.NODE_ENV !== 'production',
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  configureWebpack: {
    plugins: [
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('unplugin-element-plus/webpack')({
        // options
      })
    ]
  }
}
