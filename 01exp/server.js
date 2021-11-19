//引入express框架
const express = require('express')
//创建路由表
// const router = express.Router()

//引入路由
const router1 = require('./router/prj1')
const router2 = require('./router/prj2')
//创建app服务
const app = express()

//配置使用路由表  (注意路由表的执行顺序,分类配置)
app.use('/prj1', router1)
// router.get('/test', (req, res) => {
//   console.log('test 路径下的get请求!');
//   //res.end('hello Express!') //end只能返回字符串,返回对象会报错
//   res.send({name: 'Shirely', age: 22, nation: 'Aus'})
// })
app.use('/prj2', router2)
app.listen(3001, () => console.log('server服务器 3001 端口监听中.....'))