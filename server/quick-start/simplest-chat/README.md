# 最简单的聊天应用程序<!-- omit in toc -->

## 1. 使用

1. 准备工作： 安装 [Node.js](https://nodejs.org)。
2. 安装依赖： `npm install`。
3. 启动： `npm run start`。

## 2. 理解

- WebSocket 协议的握手过程需要使用 HTTP 协议进行： 客户端首先向服务器发送一个 HTTP 请求，请求中包含了一些特殊的头部信息，告诉服务器客户端想要升级到 WebSocket 协议。服务器在收到这个请求后，会返回一个 HTTP 响应，其中包含了一些特殊的头部信息，告诉客户端服务器已经同意升级到 WebSocket 协议。

- 创建一个 Socket.IO 的 Server 实例，如果没有传入一个已经存在的 HTTP 服务对象，Socket.IO 会自动创建一个 HTTP 服务对象并将其绑定到 Server 实例上，用于处理握手过程。
