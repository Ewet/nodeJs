// require 需要和node_module在同一个目录下；
var mysql = require('mysql');

exports.base = (sql, data, callback) => {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'test'
    });
    
    connection.connect();
    // 对数据库的操作
    connection.query(sql, data, function (error, results, fields) {
        if (error) throw error;
        callback(results)
    });
    
    connection.end();
}

