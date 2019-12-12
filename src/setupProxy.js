const proxy = require("http-proxy-middleware")

module.exports = (app)=>{
  app.use("/api", proxy({
    target : "http://localhost:8888",
    changeOrigin: true,
    pathRewrite : {
      '^/api' : "/"
    },
    secure: false//当是 https 是 为true  且可以进行多个代理
  }))
}