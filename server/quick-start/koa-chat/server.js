const { createServer } = require('http');
const { Server } = require('socket.io');
const Koa = require('koa');
const Router = require('@koa/router');

// 创建 Koa 路由
const router = new Router();
// Socket.IO 客户端会通过 `/socket.io/` 地址发起 WebSocket 的握手请求，
// Socket.IO 会对该请求进行处理，所以不会被 Koa 的路由捕获。
router.get('/socket.io/', async () => {
  console.log('GET /socket.io/');
});
// 普通路由可以正常捕获
router.get('/test', async () => {
  console.log('GET /test');
});

// 创建一个 Koa 应用实例
const app = new Koa();
// 注册路由
app.use(router.routes());

// 使用 Koa 应用来显式的创建 HTTP 服务
// 通常会使用 `app.listen(…)` 快捷方式
const httpServer = createServer(app.callback());
// 启动服务并监听端口
httpServer.listen(3000);

// 使用 Koa 的 HTTP 服务来创建 Socket.IO 服务实例
// 并设置允许跨域
const io = new Server(httpServer, { cors: { origin: '*' } });
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
