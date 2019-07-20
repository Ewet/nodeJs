/**
 * 模板引擎的使用 art-template
 */
const path = require('path');
const express = require('express');
const app = express();
const template = require('art-template')
// 设置模板的路径
app.set('views',path.join(__dirname, 'views'))
// 指定模板引擎的后缀名
app.set('view engine', 'art')
// express-art-template 的引入
app.engine('art', require('express-art-template'));
// 监听路径
app.get('/list',(req, res) => {
    let data = {
        title: '水果',
        list: ['banana','apple','aaa']
    }
    res.render('list', data)
})

app.listen(3000, ()=>{
    console.log('running...')
})
