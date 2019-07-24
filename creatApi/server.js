/**
 * 创建接口
 */
const express = require('express');
const app = express();
const db = require('./db.js')

// json 格式的接口
// app.get('/allBook', (req, res) => {
//     let sql = 'select * from book';
//     db.base(sql, null, (result) => {
//         res.json(result); // 以json格式返回数据
//     })
// })

// jsonp 格式的接口; 请求的时候需要带一个callback的参数：http://localhost:3000/allBook?callbock=foo;不然会返回json类型的数据；
app.get('/allBook', (req, res) => {
    let sql = 'select * from book';
    db.base(sql, null, (result) => {
        res.jsonp(result);
    })
})

app.listen(3000,() =>{
    console.log('running...')
})