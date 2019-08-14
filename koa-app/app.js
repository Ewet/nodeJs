const koa = require('koa');
const Router = require('koa-router')
const db = require('./db.js')
// 实例化
const app = new koa();
const router = new Router();
// 使用路由
// router.get('/', async ctx => {
//     ctx.body = {msg: 'hello world'}
// })
router.get('/', async ctx => {
    let sql = 'select * from book';
    db.base(sql, null, (result) => {
        console.log(result)
    })
    ctx.body = {data: 'kikkkk'};
})

// 配置路由
app.use(router.routes()).use(router.allowedMethods());

// 设置端口号
const port = process.env.PORT || 5000;

// 监听端口
app.listen(port, () => {
    console.log(`server started on localhost:${port}`);
})