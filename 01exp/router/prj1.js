const express = require('express')
//创建app服务
const app = express()
//创建路由表
const router = express.Router()
router.get('/test', (req, res) => {
  console.log('test 路径下的get请求!');
  res.send('prj1 --get-- 路径 /test')
})

router.post('/test', (req, res) => {
  console.log('test 路径下的post请求! ---prj1');
  res.send('prj1 --post-- 路径/test -- ')
})

router.post('/pwd', (req, res) => {
  console.log('pwd 路径下的psot请求!');
  res.send('prj1 ---post-- 路径 /pwd -- ')
})
//导出路由
module.exports = router