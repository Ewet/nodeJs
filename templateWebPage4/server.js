const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db')
app.use('/www', express.static('public'));

app.use(bodyParser.urlencoded({'extended': false}))

app.get('/tmpWeb', (req, res) => {
    // 监测到接口，查询数据库，返回数据
    let sql = 'select * from book';
    db.base(sql, null, (result) => {
        res.json(result)
    })
})

app.listen(3000, () => {
    console.log('running...')
})