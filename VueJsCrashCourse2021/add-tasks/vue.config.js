module.exports = {
  publicPath: "./",
  devServer: {
    open: true,
    host: 'localhost',
    port: 8000,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {
      '^/api': {
        target: 'http://localhost:5000/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' }
      }
    }
  }
}