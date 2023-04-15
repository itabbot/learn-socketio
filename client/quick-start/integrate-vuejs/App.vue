<script setup>
import { io } from "socket.io-client";

// 初始化
const socket = io('http://127.0.0.1:3000');

// 监听连接成功事件
socket.on('connect', (a) => {
  alert('连接成功');
});

// 监听“服务端响应消息”事件
socket.on('rspmsg', (msg) => {
  alert(`服务端响应：“${msg}”`);
});

// 消息内容
let msg = ''

// 发送消息
const sendmsg = function () {
  socket.emit('sendmsg', msg);
};
</script>

<template>
  <div>
    <input type="text" v-model="msg" />
    <button @click="sendmsg">发送</button>
  </div>
</template>
