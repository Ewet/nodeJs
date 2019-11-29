/**
 * https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/http.md
 * 服务器server：接收来自客户端的请求，并将客户端请求的地址返回给客户端。
    客户端client：向服务器发起请求，并将服务器返回的内容打印到控制台。
 *  */

var http = require('http');

// http server 例子
var server = http.createServer(function(serverReq, serverRes){
    serverRes.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'})
    var url = serverReq.url;
    serverRes.end( '您访问的地址是：' + url );
});

server.listen(3000);

// http client 例子
var client = http.get('http://127.0.0.1:3000/ewet.com', function(clientRes){
    clientRes.pipe(process.stdout);
});
console.log(client);

//关于继承与扩展
// 参考：https://cnodejs.org/topic/4fb1c1fd1975fe1e1310490b
/**
 * net 模块用于创建基于流的 TCP 或 IPC 的服务器（net.createServer()）与客户端（net.createConnection()）。
 * 进程间通信:IPC
 * TCP:传输控制协议（TCP，Transmission Control Protocol）是为了在不可靠的互联网络上提供可靠的端到端字节流而专门设计的一个传输协议。
 * net.createServer(fn)，回调中的 socket 是个双工的stream接口，也就是说，读取发送方信息、向发送方发送信息都靠他。
 */
// var net = require('net');

// var PORT = 8989;
// var HOST = '127.0.0.1';

// var server = net.createServer((socket) => {
//     console.log('connected:' + socket.remoteAddress + ':' + socket.remotePort);

//     socket.on('data', (data) => {
//         console.log('data:' + socket.remoteAddress + ':' + data);
//         console.log('data is: ' + data);
//     })

//     socket.on('close', function(){
//         console.log('close:' + socket.remoteAddress + ':' + socket.remotePort);
//     })
// })

// server.listen(PORT, HOST);

// console.log(server instanceof net.Server);



