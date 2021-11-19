//单名称多文件上传  //对应 [表单提交.html]
const express = require('express')
const app = express()
//引入path模块,方便修改文件
const path = require('path')
//cors跨域包
const cors = require('cors')
app.use(cors())

//multer图片上传工具
const multer = require('multer')
//使用multer创建一个接收仓库信息,指定上传文件的存放路径和名称
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    //req，本次请求信息
    //fiLe,本次请求的文件
    //cb,回调函数，利用回调函数来设定存储路径
    //第一个参数 null，表示不要修改我的二进制流文件
    cb(null, '../uploaded/')
  },
  filename: function(req, file, cb) {
    //req，本次请求信息
    //fiLe,本次请求的文件信息
    //cb,回调函数，利用回调函数来设定存储名称
    //第一个参数 null，表示不要修改我的二进制流文件
    // console.log(file);
    //利用path模块来拿到文件的后缀名
    const temp = path.extname(file.originalname)
    // cb(null, '123aaa.jpg')
    cb(null, `snamul_${Date.now()}_${Math.random().toString().slice(5)}${temp}`)
  }
})
//配置接收器,包含仓库信息
const fileUpload = multer({storage})

//路由信息
const router = express.Router()
router.post('/upload', fileUpload.array('avatar'), (req, res) => {
  console.log('后端做出响应...接收文件');
  console.log(req.files);
})

app.use(router)
app.listen('3004',() => console.log('服务器端口 3004 监听中.....'))