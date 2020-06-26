/*
 * @Author: your name
 * @Date: 2020-06-03 19:01:11
 * @LastEditTime: 2020-06-19 16:53:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \officialWebsite\request\news_detail.js
 */ 
$(function(){
    var id = window.location.search.split('?id=')[1]
    getNewsByid({id}).then(res=>{
         
        console.log(res)
        $('.new_Title').html(res.data.news.name)
        $('#new_content').html(res.data.news.remark)
        $('#readNum').html(res.data.news.readnumber)
        $('#createTime').html(res.data.news.createtime)
        $('.case_name').html(res.data.news.name)
        var be 
        if(res.data.beforeNews){
            be = `
           <a href='case_detail.html?id=${res.data.beforeNews.id}' class="prev fl ellipsis">
           <span>上一篇</span> <span> ${res.data.beforeNews.name}</span></a> 
           `
        }else{
          be = `
           <a class="prev fl ellipsis">
           <span>上一篇</span> <span> 没有上一篇了</span></a> 
           `
        }
        var af 
        if(res.data.nextNews){
            af = `
           <a href='case_detail.html?id=${res.data.nextNews.id}' class="next fr ellipsis">
           <span>下一篇</span> <span> ${res.data.nextNews.name}</span></a> 
           `
        }else{
          af = `
           <a class="next fr ellipsis">
           <span>下一篇</span> <span> 没有下一篇了</span></a> 
           `
        }


        $('#bottom_nav').html(be+af)
    })
})
