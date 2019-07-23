var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

connection.connect();
// 对数据库的操作

let sql = 'insert into book set ?';
let data = {
    "name": "明朝那些事",
    "author": "当年明月",
    "category": "文学",
    "description": "明朝的历史"
}


connection.query(sql, data, function (error, results, fields) {
  if (error) throw error;
  console.log('数据插入成功');
});

connection.end();