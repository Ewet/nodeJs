const dns = require('dns');

dns.lookup('baidu.com', (err, address, family) => {
    if(err) throw err;
    console.log('域名对于ip地址：' + address);
    console.log('ip4或6：' + family);
})