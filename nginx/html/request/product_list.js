/*
 * @Author: your name
 * @Date: 2020-06-03 16:07:09
 * @LastEditTime: 2020-06-04 18:11:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \officialWebsite\request\product_list.html
*/
let pageindex = 1
let totalpage = 0
let categoryId = 4
let pageSize = PAGESIZE
function getNewsList(categoryId, pageIndex, pageSize) {

    newList({ categoryId, pageIndex, pageSize }).then(res => {
        console.log(res)
        
        totalpage = res.data.totalPage
        var list = ''
        res.data.newsList.map((item, i) => {
            list += `
            <li class="projectitem wow slideInUp" data-wow-delay="0.2s"> <a href="product_detail.html?id=${item.id}">
            <div class="projectitem-wrapper">
              <div class="project-img"><img src="${item.listimg}"></div>
              <div class="project-info">
                <div>
                  <p class="title fl">${item.name}</p>
                  <p class="subtitle fr">${item.tips}</p>
                </div>
              </div>
            </div>
          </a> </li>
            `
        })
        $('#produtcs_list').html(list)
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
    getNewsList(4, page, pageSize)

}
function pervPage() {
    if (pageindex == 1) {
    return   
    }
    pageindex--
    getNewsList(4, pageindex, pageSize)

}
function nextPage() {
    if (pageindex >= totalpage) {
       return
    }
    pageindex++
    getNewsList(4, pageindex, pageSize)

}
function changePage(page) {
    pageindex = page

    getNewsList(4, pageindex,pageSize)


}


$(function () {
    getNewsList(4, 1, pageSize)
    
})