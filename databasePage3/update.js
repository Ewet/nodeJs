var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

connection.connect();
// 对数据库的操作

let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
let data = [ '浪潮之巅','吴军','计算机','it巨头',6]


connection.query(sql, data, function (error, results, fields) {
  if (error) throw error;
  console.log('数据更新成功');
});

connection.end();