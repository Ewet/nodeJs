/* 
    初始化目录结构
*/

const path = require('path');
const fs = require('fs');

let root = 'F:\\Ewet\\repertory\\nodeJs';

let fileContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    welcome to index.html
</body>
</html>
`

let initData = {
    projectName: 'creatFiles-resule',
    data: [
        {
            name: 'img',
            type: 'dir'
        },
        {
            name: 'css',
            type: 'dir'
        },
        {
            name: 'js',
            type: 'dir'
        },
        {
            name: 'index.html',
            type: 'file'
        }
    ]
}

// 创建项目根路径
fs.mkdir(path.join(root,initData.projectName),(err) => {
    if(err) return;
    // 创建子目录和文件
    initData.data.forEach(i => {
        if(i.type === 'dir'){
            // 创建子目录
            fs.mkdirSync(path.join(root,initData.projectName, i.name))
        }else if(i.type === 'file'){
            // 创建文件并写入内容
            fs.writeFileSync(path.join(root,initData.projectName, i.name), fileContent);
        }
    })
})


