var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/test");

mongoose.connection.once("open", () => {
    console.log("数据库链接成功")
})