const router = require('express').Router()
//链式配置路由表
router
  .get('/dest', (req, res) => res.send('prj2 /dest 路径下的get请求响应结果'))
  .post('/day', (req, res) => res.send('prj2 /day 路径下的post请求响应结果!'))

//导出路由
module.exports = router