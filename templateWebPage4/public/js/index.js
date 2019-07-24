// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM(`<!DOCTYPE html>`);
// const $ = require('jQuery')(window);
// const jQuery = require('jquery');
// window(jQuery);
$(function(){
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/tmpWeb',
        dataType: 'json',
        success: (res) => {
            console.log(res)
            let html = template('indexTpl', {list: res});
            $('#dataList').html(html);
        }
    })
})