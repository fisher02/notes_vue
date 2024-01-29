module.exports = {
  devServer: {
      port: 7070,
      proxy: {
        '/api': {
          target: 'http://localhost:8080/notes',
          ws:true,
          changeOrigin: true,
          pathRewrite: {
            '^/api':''
          }
        },
      },
  }
}