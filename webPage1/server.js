/**
 * 动态网页开发
 * 
 * 成绩查询功能
 * 
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const scoreData = require('./scores.json');




 http.createServer((req,res) => {
     if(req.url.startsWith('/query') && req.method === 'GET') {
         fs.readFile(path.join(__dirname, 'query.html'), 'utf8', (err, content) => {
             if(err){
                 res.writeHead(500,{'Content-Type': 'text/plain;charset=utf8'});
                 res.end('服务器报错')
             }
             res.end(content)
         })
     } else if(req.url.startsWith('/scores') && req.method === 'POST'){
         console.log(123)
         let pdata = '';
         req.on('data', (chunk) => {
            pdata += chunk
         })
         req.on('end', () => {
             let obj = querystring.parse(pdata);
             let result = scoreData[obj.code]
             fs.readFile(path.join(__dirname, 'scores.html'), 'utf8', (err,content) => {
                if(err){
                    res.writeHead(500,{'Content-Type': 'text/plain;charset=utf8'});
                    res.end('服务器报错')
                }
                // console.log(result);
                content = content.replace('$$chinese$$', result.chinese);
                content = content.replace('$$math$$', result.math);
                content = content.replace('$$english$$', result.english);
                content = content.replace('$$summary$$', result.summary);
                res.end(content)
             })
         })
     }

 }).listen(3003, () => {
     console.log('running...')
 })