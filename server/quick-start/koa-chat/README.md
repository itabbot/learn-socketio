# 整合 Koa 框架的聊天应用程序<!-- omit in toc -->

## 1. 使用

1. 准备工作： 安装 [Node.js](https://nodejs.org)。
2. 安装依赖： `npm install`。
3. 启动： `npm run start`。

## 2. 理解

- 通常情况下，会使用 `app.listen(…)` 这样的语法来启动 Koa 的 HTTP 服务，这其实是 `http.createServer(app.callback()).listen(...);` 的快捷方式。
- 所以，可以显式的创建 Koa 的 HTTP 服务，并将其提供给 Socket.IO 用于处理握手过程。这样就能共用一个 HTTP 服务，更加的灵活和方便。
- Socket.IO 客户端会通过 `/socket.io/` 地址发起 WebSocket 的握手请求，Socket.IO 会对该请求进行处理，所以不会被 Koa 的路由捕获。
