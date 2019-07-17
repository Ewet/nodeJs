// 全局变量

console.log(__filename); // 包含文件名（globe.js）的绝对路径
console.log(__dirname); // 不包含文件名的绝对路径

// 延迟函数
// setTimeout / setInterval

// process.argv: 返回一个数组，第一项为执行环境的路径；第二项为当前执行文件的文件路径;从第三项开始为接收的命令行参数；
console.log(process.argv)

// process.arch: 获取当前系统的架构（64位或32位）
console.log(process.arch)
