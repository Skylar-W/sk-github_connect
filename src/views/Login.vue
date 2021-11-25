<template>
  <div class="login">
    <input type="text" placeholder="请输入您的用户名" v-model="username"/>
    <button @click="HandlerLogin">登录聊天室</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return { username: '' }
  },
  methods: {
    HandlerLogin() {
      const username = this.username.trim()
      if(username.length < 6) {
        alert('请输入不小于6位的用户名!')
        return;
      }
      localStorage.setItem('username', username)
      this.$router.push('/home')
    }
  },
  mounted() {
    const username = localStorage.getItem('username')
    if(username) {
      this.$router.push('/home')
      return;
    }
  }
}
</script>

<style>
  input, button {
    outline: none;
    height: 60px;
  }
  input {
    width: 240px;
    padding: 4px;
    font-size: 20px;
  }
  button {
    margin-left: 8px;
    background-color: #f60;
    border-radius: 4px;
  }
</style>
