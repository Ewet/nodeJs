/**测试db的封装方法 */

const db = require('./db.js');

let sql = 'select * from book'
let data = null
db.base(sql, data, (res) => {
    console.log(res)
})