const express = require('express')
const app = express()
const paramRouter = require('./router/hdPms')
//1.内置的方法   2.(附:body-parser插件)  解析请求体
app.use(express.urlencoded())  //内置方法
app.use(paramRouter)
app.listen('3003', () => console.log('参数解析 3003 服务器启动了.....'))