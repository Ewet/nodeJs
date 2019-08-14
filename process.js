const http = require('http')
const server = http.createServer();
server.listen(3000, () => {
    process.title = '测试进程'
    console.log('进程id:' + process.pid );
})