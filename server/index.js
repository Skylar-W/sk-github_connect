const Ws = require('ws')

;((Ws) => {
  const Server = new Ws.Server({ port: 8000 })
  const init = () => {
    bindEvent()
  }

  function bindEvent() {
    Server.on('open', handlerOpen)
    Server.on('close', handlerClose)
    Server.on('error', handlerError)
    Server.on('connection', handlerConnection)
  }

  function handlerOpen() {
    console.log('BE: ws open');
  }
  function handlerClose() {
    console.log('BE: ws Close');
  }
  function handlerError() {
    console.log('BE: ws Error');
  }
  function handlerConnection(Ws) {
    console.log('BE: ws Connection');
    Ws.on('message', handlerMessage)
  }

  function handlerMessage(msg) {
    Server.clients.forEach((c) => {
      c.send(msg)
    })
  }

  init()
})(Ws)