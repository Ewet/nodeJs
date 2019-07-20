const express = require('express');
const app = express();
// bodyParser 中间件对post的data进行格式化
const bodyParser = require('body-parser');

app.use(express.static('public'));

// 挂载参数处理中间件
app.use(bodyParser.urlencoded({extended: false}));

// get 参数处理
app.get('/login',(req, res) => {
    let data = req.query;
    console.log(data);
    if(data.username === 'admin' && data.password === '123'){
        res.send('success login get')
    }else {
        res.send('fail login get')
    }
})
// post 数据出理
app.post('/login',(req, res) => {
    let data = req.body;
    console.log(data)
    if(data.username === 'admin' && data.password === '123'){
        res.send('success login post')
    }else {
        res.send('fail login post')
    }
})
app.listen(3000, () => {
    console.log('running...')
})