//单文件上传    //对应 [表单提交.html]
const express = require('express')
const app = express()
//cors跨域包
const cors = require('cors')
app.use(cors())
//multer图片上传工具
const multer = require('multer')
//使用multer创建一个接收器,指定上传文件的存放路径
const fileUpload = multer({dest: '../uploaded'})
const router = express.Router()
router.post('/upload', fileUpload.single('avatar'), (req, res) => {
  console.log('后端做出响应...接收文件');
  console.log(req.file);
})

app.use(router)
app.listen('3004',() => console.log('服务器端口 3004 监听中.....'))