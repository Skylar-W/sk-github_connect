const router = require('express').Router()
/* 引入正则验证工具库 */
const {testEmail, testPwd} = require('../utils/reg')
/* 导入数据库模型 */
const {UserModel} = require('../DB/db');
const session = require('express-session');
/*  配置路由表  */
//1. 登录
router.post('/login', async (req, res) => {
  console.log(req.body);
  const {email, password} = req.body
  //参数验证
  if(!email || !password) return res.send({ msg: '请输入正确的用户名和密码信息!', code: 0 })
  //提交信息的格式验证
  if(!testEmail(email) || !testPwd(password)) return res.send({msg: '请输入正确的用户名和密码!', code: 0})

  // new UserModel({
  //   email: 'Michael@163.com',
  //   password: '123456789',
  //   phone: '13255556666',
  //   age: 32,
  //   sex: '男',
  //   hobby: ['书法', 'K歌', '攀岩', '篮球'],
  //   desc: '选择高品质的生活方式 ^_^'
  // }).save().then(res => console.log(res)).catch(err => console.log(err))
  
  //操作数据库
  const result = await UserModel.findOne({email, password})
  //根据结果给出提示反馈
  if(!result) return res.send({msg: '用户名或者密码错误,请重新输入!', code: 0})
  //提示登陆成功,提示信息显示
  //存储一个标识符,直接存储用户信息
  req.session.userInfo = result
  res.send({ msg: '恭喜您登陆成功!', code: 1 })
  console.log(result)
})


module.exports = router