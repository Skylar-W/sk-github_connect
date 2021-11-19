const router = require('express').Router()
//配置路由
router.get('/index.html', (req, res) => {
  //判断是否登录
  console.log(req.session);
  if(!req.session.userInfo) return res.render('./index.html', {msg2: '去登录吧...', title: '请登录!', url: '/views/login.html'})
  //返回一个html页面
  res.render('./index.html', {msg2: '个人中心', title: req.session.userInfo.email, url: '/views/self.html'})
})

router.get('/login.html', (req, res) => {
  //
  res.render('./login.html')
})

router.get('/self.html', (req, res) => {
  //
  const {userInfo} = req.session
  //进行登录验证
  if(!userInfo) return res.redirect('/views/login.html')
  //直接返回页面, 把要渲染的数据放进去,渲染页面
  console.log(userInfo);
  res.render('./self.html', userInfo)
})

router.get('/modify-pwd.html', (req, res) => {
  //
  res.render('./modify-pwd.html')
})

module.exports = router