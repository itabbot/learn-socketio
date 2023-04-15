const { Server } = require('socket.io');

// 实例化一个 Socket.IO 服务实例
// 监听端口并设置允许跨域
const io = new Server(3000, { cors: { origin: '*' } });

// 监听客户端连接成功事件
io.on('connection', (socket) => {
  console.log(`客户端连接成功 ID:${socket.id}`);

  // 监听客户端发消息事件
  socket.on('sendmsg', (message) => {
    console.log(`收到消息：${message}`);

    // 向客户端响应消息
    socket.emit('rspmsg', `已收到您发的消息：${message}`);
  });
});
