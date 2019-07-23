var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

connection.connect();
// 对数据库的操作

let sql = 'delete from book where id=?';
let data = [6]


connection.query(sql, data, function (error, results, fields) {
  if (error) throw error;
  console.log('数据删除成功');
});

connection.end();