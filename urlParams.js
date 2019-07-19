/**
 * get 参数处理
 * url.parse: 字符串解析成对象
 * url.format: 对象解析成字符串
 */

 const url = require('url');

//  let str = 'https://baidu.com?name=chen&age=23';

//  console.log(url.parse(str, true))

 let urls = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'baidu.com',
    port: null,
    hostname: 'baidu.com',
    hash: null,
    search: '?name=chen&age=23',
    query: { name: 'chen', age: '23' },
    pathname: '/',
    path: '/?name=chen&age=23',
    href: 'https://baidu.com/?name=chen&age=23' 
}

let strs = url.format(urls);

console.log(strs)



/**
 * post 参数处理
 * querystring.parse(): 字符串转为对象
 * querystring.strigify(): 对象转为字符串
 * 
 * 在服务中通过req.on('data')来多次获取传过来的数据
 * 通过req.on('end)结束获取数据 
 * 
 */



