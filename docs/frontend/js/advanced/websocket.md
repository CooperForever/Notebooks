# websocket
## 什么是websocket
HTML5提供的一种浏览器与服务器全双工通讯的网络技术，属于应用层协议。基于TCP传输协议，并复用HTTP握手通道。
### 优点
1. 支持双向通信，实时性更强
2. 更好的二进制支持
3. 较少的控制开销，连接创建后，交互式数据包头部小，http协议每次都要携带完整的头部。
4. 支持扩展，ws协议定义了扩展，用户可以扩展协议或者自定义协议。
## 如何建立连接
websocket复用了HTTP的握手通道，客户端与服务端协商升级协议，协议升级完成后，后续数据交还参照Websocket协议。

```js
GET / HTTP/1.1
Host: localhost:8080
Origin: http://127.0.0.1:3000
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Version: 13
Sec-WebSocket-Key: w4v7O6xFTi36lq3RNcgctw==
```
- `Connection: Upgrade` 表示升级协议
- `Upgrade: websocket` 表示要升级到`websocket`协议
- `Sec-WebSocket-Version: 13：` 表示`websocket`版本，如果服务端不支持，则返回一个包含服务端支持版本号的`header`
- `Sec-WebSocket-Key`: 配套服务端的响应首部`Sec-WebSocket-Accept` 防止恶意或无意连接。
## 数据帧格式
`websocket`数据帧格式
```js
  0                   1                   2                   3
  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 +-+-+-+-+-------+-+-------------+-------------------------------+
 |F|R|R|R| opcode|M| Payload len |    Extended payload length    |
 |I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
 |N|V|V|V|       |S|             |   (if payload len==126/127)   |
 | |1|2|3|       |K|             |                               |
 +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
 |     Extended payload length continued, if payload len == 127  |
 + - - - - - - - - - - - - - - - +-------------------------------+
 |                               |Masking-key, if MASK set to 1  |
 +-------------------------------+-------------------------------+
 | Masking-key (continued)       |          Payload Data         |
 +-------------------------------- - - - - - - - - - - - - - - - +
 :                     Payload Data continued ...                :
 + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
 |                     Payload Data continued ...                |
 +---------------------------------------------------------------+
```
## 数据传递
 `websocket`根据`opcode`来区分操作类型，比如0x8表示断开连接，0x0 - 0x2表示数据交互
### 数据分片
`websocket`的每条消息会被切分成多个数据帧，当`websocket`接收方收到一个数据帧时，会根据FIN值判断，是否收到最后一个数据帧。FIN=1表示是当前消息的最后一个数据帧
## 连接保持心跳
对于长时间没有数据来往的连接，长时间保持会浪费连接资源，可以用心跳实现这种情况下的连接保持。
- 发送方->接收方：`ping`
- 接收方->发送方：`pong`
`ping`、`pong`的操作，对应的的`websocket`的两个控制帧，opcode分别是0x9,0xA。`ws.ping('',false,true)`
## Sec-WebSocket-Key/Accept的作用
- 避免服务端收到非法的ws连接
- 避免浏览器中的ajax请求意外升级
- 防止反向代理返回的错误数据
### 数据掩码的作用
防止代理缓存污染攻击

1. 攻击者->代理服务器->恶意服务器
2. 攻击者（伪造http文本，携带真实的host）->代理服务器->缓存
3. 普通用户（访问真实的服务端）->代理服务器->返回缓存

## 客户端API
- WebSocket构造函数
  ```js
  const ws = new WebSocket('ws://localhost:8080)
  ```
- **websocket.readyState** 返回实例对象状态
  - CONNECTING：值为0，表示正在连接
  - OPEN：值为1，表示连接成功，可以通讯
  - CLOSING：值为2，表示连接正在关闭
  - CLOSED: 连接已经关闭或者没有链接成功
-  **ws.onopen** 实例对象的`onopen`属性，用于制定连接成功后的回调函数。
   ```js
   ws.onopen = function () {
       ws.send('Hello world')
   }
   ```
   如果需要指定多个回调函数，可以使用`addEventListener`
   ```js
   ws.addEventListener('open', function (event) {
    ws.send('Hello Server!');
   });
   ```
- **websocket.onclose**
  ```js
    ws.onclose = function(event) {
    var code = event.code;
    var reason = event.reason;
    var wasClean = event.wasClean;
    // handle close event
    };

    ws.addEventListener("close", function(event) {
    var code = event.code;
    var reason = event.reason;
    var wasClean = event.wasClean;
    // handle close event
    });
  ```
- **websocket.onmessage**
  ```js
  ws.onmessage = function(event) {
    var data = event.data;
    // 处理数据
  };

  ws.addEventListener("message", function(event) {
    var data = event.data;
     // 处理数据
  });
  ```
- websocket.send() 用于向服务器发送数据
  ```js
  ws.send("your message")
  ```
- websocket.onerror 指定报错回调
   ```js
    ws.onerror = function(event) {
        // handle error event
    };

    ws.addEventListener("error", function(event) {
        // handle error event
    });
   ```

## socket.io
### 安装
```shell
yarn add socket.io
```
### Server
```js
const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});
server.listen(3000);

// Standalone
const io = require('socket.io')();
io.on('connection', client => { ... });
io.listen(3000);

```
- `io.emit()` 服务端向所有人广播
- `socket.broadcast.emit("hello", "world")` 服务端向除了自己所有人广播，`socket`为实例
- `socket.join(some room)` 加入频道
- `io.to("room1").to('room2').emit("some event")` 向频道广播
- 

### Client
 ```js
 import { io } from 'socket.io-client'
 // 同域名下
 const socket = io()
 // 非同域名下
 const socket = io("https://server-domain.com")
 const socket = io("wss://server-domain.com");
 const socket = io("ws://server-domain.com");
 ```
### 客户端实例
![avatar](/images/communication-socket.png)
- `socket.id`  a random 20-characters identifier.
- `socket.on(eventName, listener)`
  ```js
  socket.on("details", (...args) => {
    // ...
  });
  ```
- `socket.once(eventName, listener)`
  ```js
  socket.once("details", (...args) => {
    // ...
  });
  ```
- `socket.off(eventName, listener)`
```js
const listener = (...args) => {
  console.log(args);
}

socket.on("details", listener);

// and then later...
socket.off("details", listener);
```