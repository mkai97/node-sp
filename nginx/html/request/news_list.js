/*
 * @Author: your name
 * @Date: 2020-06-03 16:07:09
 * @LastEditTime: 2020-06-24 10:32:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \officialWebsite\request\product_list.html
*/
let pageindex = 1
let totalpage = 0
let categoryId = 2
let pageSize = PAGESIZE


function btn() {
    console.log(111)
    $('#item').popup({
        time: 1000,
        classAnimateShow: 'flipInX',
        classAnimateHide: 'hinge',
        onPopupClose: function e() {
            // console.log('0')
        },
        onPopupInit: function e() {
            // console.log('1')
        }
    });

}


function getNewsList(categoryId, pageIndex, pageSize) {

    newList({ categoryId, pageIndex, pageSize }).then(res => {
        console.log(res)
        totalpage = res.data.totalPage
        var list = ''
        /**
         * <a href="news_detail.html?id=${item.id}"
          class="newscontent">
         */
        res.data.newsList.map((item, i) => {
            list += `
            <li onClick='btn()' class="newstitem clearfix wow slideInUp" data-wow-delay="0.2s"> 
          <div class="newsimg fl"><img src="${item.listimg}" /></div>
          <div class="newsbody fl">
            <p class="title">${item.name} (1元/条)</p>
            <p class="date"><span class="fontcc">${item.time ? item.time : ''}</span></p>
            <p class="description">
            ${item.tips}</p>
          </div>
          <div class="details fr"><span class="fontcc">MORE<i class="fa fa-angle-right"></i></span></div>
         </li>
            `

            /**
             * </a>
             */
        })
        $('#news_list').html(list)
        var pageHtmlBefore = `
        <a disabled="disabled">
        <i onClick='toPage(${1})' class="fa fa-angle-double-left"></i>
      </a> 
      <a onClick='pervPage()' disabled="disabled">
        <i class="fa fa-angle-left"></i>
      </a>
        <${pageindex == 1 ? 'span' : 'a'} onClick='toPage(${1})' class="cpb">1</${pageindex == 1 ? 'span' : 'a'}>`
        var pageHtmlAfter = `
        <a><i onClick='nextPage()' class="fa fa-angle-right"></i></a>
        <a><i onClick='toPage(${res.data.totalPage})' class="fa fa-angle-double-right"></i>
        </a>
        `
        var pageHtml = ''
        for (var i = 1; i < res.data.totalPage; i++) {
            pageHtml += `
            <${pageindex == i + 1 ? 'span' : 'a'} class="cpb" onClick='changePage(${i + 1})'>${i + 1}</${pageindex == i + 1 ? 'span' : 'a'}>
            `
        }
        $('#paginators').html(pageHtmlBefore + pageHtml + pageHtmlAfter)
    })
}
function toPage(page) {
    pageindex = page
    getNewsList(2, page, pageSize)

}
function pervPage() {
    if (pageindex == 1) {
        return
    }
    pageindex--
    getNewsList(2, pageindex, pageSize)


}
function nextPage() {
    if (pageindex >= totalpage) {
        return
    }
    pageindex++
    getNewsList(2, pageindex, pageSize)


}
function changePage(page) {
    pageindex = page

    getNewsList(2, pageindex, pageSize)


}


$(function () {
    getNewsList(2, 1, pageSize)
})