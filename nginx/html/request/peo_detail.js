/*
 * @Author: your name
 * @Date: 2020-06-03 11:23:15
 * @LastEditTime: 2020-06-08 10:52:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \officialWebsite\request\pro.js
 */

$(function () {
    // $('.prodName').empty()
    //     $('.tips').empty()
    //     $('.remark').empty()
    //     $('.prodName').append(currentProd.name)
    //     $('.tips').append(currentProd.tips)
    //     $('.remark').append(currentProd.remark)
    //     $('.swiper-wrapper-imglist').attr('src', currentProd.listimg)

    $(function () {
        var id = window.location.search.split('?id=')[1]
        getNewsByid({ id }).then(res => {

            console.log(res)
            $('.prodName').html(res.data.news.name)
            $('.tips').html(res.data.news.tips)

            $('.remark').html(res.data.news.remark)
            $('#readNum').html(res.data.news.readnumber)
            $('.swiper-wrapper-imglist').attr('src', res.data.news.listimg)

            var be
            if (res.data.beforeNews) {
                be = `<a class="post-prev" href='peo_detail.html?id=${res.data.beforeNews.id}'>
                <div  class="infor-wrap"> <span class="title ellipsis">${res.data.beforeNews.name}</span> </div>
                <i class="details fa fa-angle-left"></i> </a>
               `
            } else {
                be = `<a class="post-prev">
              <div class="infor-wrap"> <span class="title ellipsis">没有上一个了</span> </div>
              <i class="details fa fa-angle-left"></i> </a>  
               `
            }
            var af
            if (res.data.nextNews) {
                af = `
                <a  class="post-next" href='peo_detail.html?id=${res.data.nextNews.id}'>
                 <div class="infor-wrap"> <span class="title ellipsis">${res.data.nextNews.name}</span>  </div>
                <i class="details fa fa-angle-right"></i> </a> 
               `
            } else {
                af = `
                <a  class="post-next"><div class="infor-wrap"> <span class="title ellipsis">没有下一个了</span>  </div>
      <i class="details fa fa-angle-right"></i> </a> 
               `
            }


            $('#bottom_nav').html(be + af)
        })
    })











    // const params = { //总的提交信息
    //     id: this.apId, //混合传过来  业务流id
    // }
    // let that = this;
    // getIndex(params).then(res => {

    //     console.log(res.data.productList)
    //     var productList = res.data.productList
    //     var id = window.location.search.split('?id=')[1]
    //     console.log(productList, id)
    //     var LOrRProd = []
    //     var currentProd = productList.map((item, i) => {
    //         if (item.id == id) {
    //             LOrRProd.push(productList[i - 1] ? productList[i - 1] : null)
    //             LOrRProd.push(productList[i + 1] ? productList[i + 1] : null)
    //             return item
    //         }
    //     })[0]
    //     
    //     if (LOrRProd[0]) {
    //         $('.prev-P').attr('href', `product_detail.html?id=${LOrRProd[0].id}`)
    //         $(`.P-Name`).html(LOrRProd[0].name)

    //     }else{
    //         $(`.P-Name`).html('没有上一个了')
    //     }
    //     if(LOrRProd[1]){
    //         $('.next-P').attr('href', `product_detail.html?id=${LOrRProd[1].id}`)
    //     $(`.N-Name`).html(LOrRProd[1].name)
    //     }else{
    //         $(`.N-Name`).html('没有下一个了')

    //     }


    //      

    // })
})