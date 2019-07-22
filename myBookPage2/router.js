/**
 * 路由模块
 */

const express = require('express');
const router = express.Router();
const service = require('./service.js'); 

router.get('/index', service.showIndex)

router.get('/toAddBook', service.toAddBook)

router.post('/addBook', service.addBook)

router.get('/toEditBook', service.toEditBook)

router.post('/editBook', service.editBook)

router.delete('/delBook', service.delBook)

module.exports = router;
