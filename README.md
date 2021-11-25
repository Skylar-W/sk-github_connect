# WebSocket原理
https://www.ruanyifeng.com/blog/2017/05/websocket.html(参考阮一峰老师的博客文档)
  > WebSocket 协议在2008年诞生，2011年成为国际标准。所有浏览器都已经支持了。

它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。

其他特点包括：

（1）建立在 TCP 协议之上，服务器端的实现比较容易。

（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。

（3）数据格式比较轻量，性能开销小，通信高效。

（4）可以发送文本，也可以发送二进制数据。

（5）没有同源限制，客户端可以与任意服务器通信。

（6）协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。
# 聊天室
  - 前端
  1. Login
     用户名输入/进入聊天室的按钮
     input username(至少6位) --> localStorage --> enter chatting room

  2. Home
     消息列表/消息输入框/发送按钮
     localStorage --> username/msg/id/time --> 后端socket服务

    + 事件驱动
      - open
      - close
      - error
      - message   接收广播来的数据

  - 后端
     接收 --> 消息数据 --> 广播给所有连接到socket服务的客户端

    + 事件驱动
      - open
      - close
      - error
      - connection
        + message   接收客户端发送的消息数据 --> 广播出去







> websocket2

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
