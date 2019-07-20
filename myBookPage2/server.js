/**
 * 图书管理系统
 * 
 * 使用依赖
 * express
 * art-template
 * express-art-template
 * body-parser
 * 
 */

const express = require('express');
const template = require('art-template');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router.js')


// 设置模板的路径
app.set('views',path.join(__dirname, 'views'))
// 指定模板引擎的后缀名
app.set('view engine', 'art')
// express-art-template 的引入
app.engine('art', require('express-art-template'));

// 处理请求的参数
// 挂载参数处理中间件
app.use(bodyParser.urlencoded({extended: false}));
// 处理json格式的参数
app.use(bodyParser.json());



// 启动服务器
// 配置路由
app.use(router)
// 监听端口
app.listen(3000,() => {
    console.log('running...')
})






