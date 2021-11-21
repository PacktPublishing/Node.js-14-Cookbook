const WebSocket = require('ws');

const WebSocketServer = new WebSocket.Server({
  port: 3000
});

WebSocketServer.on('connection', (socket) => {
  socket.on('message', (msg) => {
    let msgString = msg.toString();

    console.log('Received:', msgString);

    if (msgString === 'Hello') socket.send('World!');
  });
});
