// const artTemplate = require('art-template')
const express = require('express')
//导入路由表
const vwRouter = require('./routes/views')
const userRouter = require('./routes/user')
const app = express()
//引入数据库
const { Mongo } = require('./DB/db')
//引入session配置
const session = require('./utils/session')
//引擎挂载 art-template
app.engine('html', require('express-art-template'))
//挂载静态资源  (tip: 最好将路径设置为绝对路径)
app.use('/public', express.static(__dirname + '/public'))
app.use('/node_modules', express.static(__dirname + '/node_modules'))
//挂载解析请求体 (只需要解析请求体,不需要解析静态资源,所以顺序在静态资源的挂载以后)
app.use(express.urlencoded())
//挂载session配置
app.use(session())
//挂载路由
app.use('/views', vwRouter)
app.use('/user', userRouter)
//连接数据库
Mongo.connect()

app.listen('3001', () => console.log('---- 服务器app:3001正在监听中.....'))