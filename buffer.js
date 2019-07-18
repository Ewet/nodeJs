/**
 * Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。可以输出成其他格式；
 * Buffer 本质上就是字节数组
 * 
 */
//-------------------------------------
// 旧版使用new进行实例化，新版直接使用Buffe类的方法;

//  let buf = new Buffer(10);
//  console.log(buf)

// Buffer.alloc 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
//  let buf = Buffer.alloc(10);
//  console.log(buf)

// -------------------------------------
// Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

// let buf = Buffer.from('hello', 'base64')
// console.log(buf)

//-------------------------------------
/**
 * 静态方法
 * isEncoding 判断是否支持某种编码方式
 * isBuffer
 * byteLength
 * concat()
 *  */ 

// console.log(Buffer.isEncoding('base64'));

//-----------------------------------------
/**
 * 实例方法
 * write() :向buffer对象中写入数据;
 * slice() :截取返回新的buffer对象；
 * toString()
 * toJson
 * 
 *  */ 
