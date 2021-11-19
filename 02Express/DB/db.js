const mongoose = require('mongoose')
const Mongo = {
  connect: function() {
    mongoose.connect('mongodb://localhost:27017/MyTestLogin123', err => {
      if(err) console.log(err);
      console.log('数据库成功建立连接.....');
    })
  }
}

//用户结构
const User = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true, minlength: 6, maxlength: 12},
  age: {type: Number, default: 18},
  sex: {type: String, enum: ['男', '女', '保密'], default: '保密'},
  phone: {type: String, minlength: 11, maxlength: 11},
  hobby: {type: Array},
  desc: {type: String, maxlength: 200},
  avatar: {type: String, default: '/public/images/def_avatar.jpg'},
  createTime: {type: Date, default: Date.now()}
})

//创建模型
const UserModel = mongoose.model('user', User)
module.exports = {Mongo, UserModel}