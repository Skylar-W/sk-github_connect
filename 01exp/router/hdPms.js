//处理请求参数
const router = require('express').Router()
router
  .get('/pms', (req, res) => {
    const {url, query} = req
    console.log(url, query);
    res.send({
      msg: '接收到了请求,做出响应!',
      params: {
        id: 2345,
        city: '深圳'
      }
    })
  })
  .post('/pms', (req, res) => {
    console.log(req.body);
    res.send({
      msg: 'hello express!',
      body: 'post 返回结果'
    })
  })




module.exports = router