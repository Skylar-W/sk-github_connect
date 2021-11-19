//提交信息正则校验
const emailReg = /^[0-9a-zA-Z]\w{5,11}@(qq|163|sina)\.(com|cn)$/
const pwdReg = /^\w{6,12}$/

//邮箱校验
const testEmail = (function(reg) {
  return function(val) {
    return reg.test(val)
  }
})(emailReg);

//密码校验
const testPwd = (function(reg) {
  return function(val) {
    return reg.test(val)
  }
})(pwdReg);

// const res = testEmail('1234687@qq.com')
// console.log(res);

exports.testEmail = testEmail
exports.testPwd = testPwd