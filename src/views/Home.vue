<template>
  <div class="home">
    <ul>
      <li v-for="item of msgList" :key="item.id">
        <p>
          <span>{{ item.user }}</span>
          <span>{{ item.dateTime }}</span>
        </p>
        <p>消息: {{ item.msg }}</p>
      </li>
    </ul>
    <input type="text" placeholder="请输入您想要发送的消息" v-model="msg"/>
    <button @click="HandlerHome">发 送</button>
  </div>
</template>

<script>
const ws = new WebSocket('ws://localhost:8000')
export default {
  name: 'Home',
  data() {
    return {
      username: '',
      msg: '',
      msgList: []
    }
  },
  mounted() {
    this.username = localStorage.getItem('username')
    if(!this.username) {
      this.$router.push('/login')
      return;
    }
    // ws.addEventListener('open', this.handlerWsOpen.bind(this))
    // ws.addEventListener('close', this.handlerWsClose.bind(this))
    // ws.addEventListener('error', this.handlerWsError.bind(this))
    // ws.addEventListener('message', this.handlerWsMessage.bind(this))

    ws.onopen = this.handlerWsOpen
    ws.onclose = this.handlerWsClose
    ws.onerror = this.handlerWsError
    ws.onmessage = this.handlerWsMessage
  },
  methods: {
    HandlerHome() {
      const msg = this.msg
      if(!msg.trim().length) {
        return;
      }
      ws.send(JSON.stringify({
        user: this.username,
        id: Date.now(),
        msg: this.msg,
        dateTime: new Date().toLocaleTimeString()
      }))

      this.msg = ''
    },
    handlerWsOpen(ev) {
      console.log('FE: ws OPen', ev)
    },
    handlerWsClose(ev) {
      console.log('FE: ws Close', ev)
    },
    handlerWsError(ev) {
      console.log('FE: ws Error', ev)
    },
    handlerWsMessage(ev) {
      // console.log('FE: ws Message', ev)
      // console.log(ev.data);
      const msg = JSON.parse(ev.data)
      console.log(msg);
      this.msgList.push(msg)
    }
  }
}
</script>

<style scoped>
  span {
    margin: 0 8px;
  }
  span:nth-child(1) {
    color: #e35;
    font-weight: 700;
  }
</style>
