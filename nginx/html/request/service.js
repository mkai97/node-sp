/*
 * @Author: your name
 * @Date: 2020-06-04 19:42:54
 * @LastEditTime: 2020-06-04 19:49:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \officialWebsite\request\service.js
 */ 
$(function(){
    getNewsByid({ id:21 }).then(res => {
        console.log(res.data.news)
        var news =res.data.news
        $('.name').html(res.data.news.name)
        $('.tips').html(res.data.news.tips)
        $('#content').html(res.data.news.remark)

    })
})