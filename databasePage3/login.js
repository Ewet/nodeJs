/**
 * 登录功能 前端+后端+数据库
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db');

app.use(express.static('public'));

// 挂载参数处理中间件bodyParser
app.use(bodyParser.urlencoded({extended: false}));
// 中间件处理json方式
// app.use(bodyParser.json());

app.post('/result',(req, res) => {
    let params = req.body;
    let sql = 'select username from user where username=? and password=?';
    let data = [params.username, params.password]
    db.base(sql, data, (result) => {
        if(result.length > 0){
            res.send('查询成功')
        }else {
            res.send('查询失败')
        }
    })
})

app.listen(3000, () => {
    console.log('running...')
})
