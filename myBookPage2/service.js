// 业务模块
//加载首页
const path = require('path');
const fs = require('fs');
let data = require('./data.json') ;

//id最大值
const maxBookCode = () => {
    let arr =[];
    data.forEach(item => {
        arr.push(item.id)
    })
    let max = Math.max.apply(null, arr);
    return Number(max);
}

exports.showIndex = (req, res) => {
    res.render('index', {list: data})
}

exports.toAddBook = (req, res) => {
    res.render('toAddBook', {})
}

exports.addBook = (req, res) => {
    let info = req.body;
    let book = {};
    for (let key in info){
        book[key] = info[key]
    }
    book.id = maxBookCode() + 1;
    data.push(book)
    // 把内存中的数据写入文件
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
        if(err){
            res.send('server error')
        }

        res.redirect('/index')
    })
}

exports.toEditBook = (req, res) => {
    let id = Number(req.query.id);
    let book = data.find(x => x.id === id);
    res.render('toEditBook', book);
}

exports.editBook = (req, res) => {
    let id = Number(req.query.id);
    let info = req.body;
    info.id = id;
    data.forEach(item => {
        if(item.id === id){
            for(let key in info){
                item[key] = info[key]
            }
            return;
        }
    })
    
    // 把内存中的数据写入文件
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
        if(err){
            res.send('server error')
        }

        res.redirect('/index')
    })
}

exports.delBook = (req, res) => {
    let id = Number(req.body.id);
    data.forEach((item,index) => {
        if(item.id === id){
            data.splice(index, 1)
        }
    })
    // 把内存中的数据写入文件
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
        if(err){
            res.send('0')
        }else{
            res.send('1')
        }
    })
}

