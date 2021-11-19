const form = document.querySelector('form')
const mail = document.querySelector('input[name=username]')
const pwd = document.querySelector('input[name=password]')

form.addEventListener('submit', function(ev) {
  ev.preventDefault()
  const username = mail.value, password = pwd.value
  //表单提交验证
  if(!username || !password) return alert('请您填写完整的登录信息!')
  //ajax发送请求
  const xhr = new XMLHttpRequest()
  xhr.onload = function() {
    // console.log(xhr.response)
    const {msg, code} = JSON.parse(xhr.response)
    if(code == 0) return alert(msg)
    window.location.href = './index.html'
  }
  xhr.open('post', '/user/login')  //回到根目录寻找user,防止跑错路由
  xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
  xhr.send(`email=${ username }&password=${ password }`)
})