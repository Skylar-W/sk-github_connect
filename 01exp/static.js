// 静态资源配置
const express = require('express')
const app = express()
const vwRouter = require('./router/views')
//挂载静态资源
app.use('/public', express.static('./public'))
app.use('/node_modules', express.static('./node_modules'))
//路由表使用
app.use('/views', vwRouter)
app.listen('3002', () => console.log('static服务器 3002端口监听中.....'))