/**
 * 服务器向服务器发送请求
 * 请求百度页面
 */

const http = require('http');
const path = require('path');
const fs = require('fs');

let options = {
    hostname: 'www.baidu.com',
    port: 80
}

let req = http.request(options, (res) => {
    let info = ''
    res.on('data', (result) => {
        info += result;
    })
    res.on('end', () => {
        fs.writeFile(path.join(__dirname, 'baidu.html'), info, 'utf8', (err) => {
            if(err) return console.log('接口请求失败')
            console.log('接口请求成功')
        });
    })
})

req.end()



