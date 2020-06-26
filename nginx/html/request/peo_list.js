/*
 * @Author: your name
 * @Date: 2020-06-03 16:07:09
 * @LastEditTime: 2020-06-04 19:33:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \officialWebsite\request\product_list.html
*/
let pageindex = 1
let totalpage = 0
let categoryId = 11
let pageSize = PAGESIZE

function getNewsList(categoryId, pageIndex, pageSize) {

    newList({ categoryId, pageIndex, pageSize }).then(res => {
        console.log(res)
        totalpage = res.data.totalPage
        var list = ''
        res.data.newsList.map((item, i) => {
            list += `
            <li class="wow slideInUp" data-wow-delay="0.2s"> <a href="peo_detail.html?id=${item.id}">
            <p class="ser-img"><img src="${item.listimg}" /></p>
            <div class="ser-info">
              <p class="tit">${item.name}</p>
              <p class="tit-s"></p>
              <p class="desc">${item.tips}</p>
            </div>
          </a> <a href="peo_detail.html?id=${item.id}" class="detail"><i class="fa fa-sort-down"></i></a>
         </li>
            `
        })
        $('#news_list').html(list)
        var pageHtmlBefore = `
        <a disabled="disabled">
        <i onClick='toPage(${1})' class="fa fa-angle-double-left"></i>
      </a> 
      <a onClick='pervPage()' disabled="disabled">
        <i class="fa fa-angle-left"></i>
      </a>
        <${pageindex==1?'span':'a'} onClick='toPage(${1})' class="cpb">1</${pageindex==1?'span':'a'}>`
        var pageHtmlAfter = `
        <a><i onClick='nextPage()' class="fa fa-angle-right"></i></a>
        <a><i onClick='toPage(${res.data.totalPage})' class="fa fa-angle-double-right"></i>
        </a>
        `
        var pageHtml = ''
        for (var i = 1; i < res.data.totalPage; i++) {
            pageHtml += `
            <${pageindex==i+1?'span':'a'} class="cpb" onClick='changePage(${i + 1})'>${i + 1}</${pageindex==i+1?'span':'a'}>
            `
        }
        $('#paginators').html(pageHtmlBefore + pageHtml + pageHtmlAfter)
    })
}
function toPage(page) {
    pageindex = page
    getNewsList(categoryId, page, pageSize)

}
function pervPage() {
    if (pageindex == 1) {
    return    
    }
    pageindex--
        getNewsList(categoryId, pageindex, pageSize)
    

}
function nextPage() {
    if (pageindex >= totalpage) {
    return    
    }
    pageindex++
        getNewsList(categoryId, pageindex, pageSize)
   

}
function changePage(page) {
    pageindex = page

    getNewsList(categoryId, pageindex, pageSize)


}


$(function () {
    getNewsList(categoryId, 1, pageSize)
})