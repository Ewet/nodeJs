/**
 * 大文件的处理方式：流处理
 */

 const path = require('path');
 const fs = require('fs');

 let spath = path.join(__dirname, 'buffer.js'); // 资源路径
 let dpath = path.join(__dirname, 'buffer.rar'); // 处理之后的存放地址
//-------------------------------------------------------------
let readStream = fs.createReadStream(spath);
let writeStream = fs.createWriteStream(dpath);

// 基于事件处理方式
// readStream.on('data',(chunk) => {
//     writeStream.write(chunk)
// })
// readStream.on('end', () => {
//     console.log('文件处理完成')
// })
//-------------------------------------------------------------
// pipe的作用直接处理输入流和输出流；
readStream.pipe(writeStream);

//-------------------------------------------------------------