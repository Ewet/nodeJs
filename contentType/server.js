

const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('./mime.json');

http.createServer((req, res) => {
    console.log(req.url);
    fs.readFile(path.join(__dirname, req.url),(err, content) => {
        if(err){
            res.writeHead(404,{
                'Content-Type': 'text/plain; charset=utf8'
            })
            res.end('页面找不到')
        } else {
            let dtype = 'text/html';
            // 获取请求文件的后缀
            let ext = path.extname(req.url);
            if(mime[ext]){
                dtype = mime[ext]
            }
            if(dtype.startsWith('text')){
                dtype+= '; charset=utf8'
            }
            res.writeHead(200,{
                'Content-Type': dtype
            })
            res.end(content);
        }
    })
}).listen(3003,()=> {
    console.log('running...')
})