var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

connection.connect();
// 对数据库的操作

let sql = 'select * from book where id=?';
let data = [7]


connection.query(sql, data, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].name);
});

connection.end();