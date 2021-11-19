const session = require('express-session')
const MongoStore = require('connect-mongo')(session)  //4.0V以后的connect-mongo,此条代码不适用
function sess(){
  return session({
    secret: 'Machael',
    name: 'sessid',
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60},
    store: new MongoStore({
      url: 'mongodb://localhost:27017/MyTestLogin123'
    })
  })
}

module.exports = sess