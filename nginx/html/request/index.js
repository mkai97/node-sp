/*
 * @Author: your name
 * @Date: 2020-06-02 15:55:42
 * @LastEditTime: 2020-06-23 15:01:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \officialWebsite\request\index.js
 */
$(function () {
  let bannerHtml = ''
  let that = this;
  getIndex({}).then(res => {
    if (res.data) {
      // 轮播图开始
      var imgUrl = res.data.adList[0].imageurl.split(',')
      var jumpUrl = res.data.adList[0].jumpurl.split(',')
      console.log($('#swiper-wrapper-1'), $('#swiper-wrapper-2'))
      // $('#swiper-wrapper-1').empty()
      // $('#swiper-wrapper-2').empty()
      imgUrl.map((item, index) => {
        bannerHtml += `
        <div class="swiper-slide"><a href='${jumpUrl[index]}'><img  src="${item}" /></a></div>
        `
      })
      bannerHtml = bannerHtml
      //轮播图结束
      // 产品列表开始
      var productList = res.data.productList
      $('#productList').empty()
      var productListhtml = ''
      productList.map((item, i) => {
        productListhtml += `
            <li class="projectitem" style="visibility: visible;" data-wow-delay="0.2s"> <a href="product_detail.html?id=${item.id}">
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
      console.log(productListhtml)
      $('#productList').html(productListhtml)
      // 产品列表结束
      // 新闻列表开始
      var newlist = res.data.newsList
      $('#newlist').empty()
      var newsHtml = ''
      newlist.map((item, i) => {
        newsHtml += `
            <li class="wow slideInUp" data-wow-delay="0.${i}s"> <a href="news_detail.html?id=${item.id}">
            <div class="img"><img src="${item.listimg}" /></div>
            <div class="info">
              <p class="tit ellipsis">${item.name}</p>
              <p class="date fontcc">${item.createtime}</p>
              <p class="desc">${item.tips}</p>
            </div>
          </a> <a href="news_detail.html" class="detail fontcc">MORE<i class="fa fa-angle-right"></i> </a> </li>`
      })
      $('#newlist').html(newsHtml)
      // 新闻列表结束

      // 案例开始
      var caselist = res.data.caseList
      $('#caseList').empty()
      var caseHtml = ''
      var classGroup = ['swiper-slide-active', 'swiper-slide-next', 'swiper-slide-prev']
      caselist.map((item, i) => {
        caseHtml += `
        <li class="wow slideInUp border-zdy" data-wow-delay="0.2s"> <a href="case_detail.html?id=${item.id}">
        <p class="ser-img"><img src="${item.listimg}" /></p>
        <div class="ser-info">
          <p class="tit">${item.name}</p>
          <p class="tit-s"></p>
          <p class="desc">${item.tips}</p>
        </div>
      </a> <a href="peo_detail.html?id=${item.id}" class="detail"><i class="fa fa-sort-down"></i></a>
      <div class='title-zdy'>${item.name}</div>
     </li>
             `
      })
      $('#case_list').html(caseHtml)
      $(document).ready(function () {
        var swiper = new Swiper('.il-sw2', {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.sp-nav',
            clickable: true,
          },
          breakpoints: {
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            }
          }
        });
      });
      // 案例结束
      // 关于我们
      $('#aboutUs').empty()
      $('#aboutMe').empty()
      var aboutUs = [res.data.aboutus]
      var aboutusHtml = ''
      aboutUs.map((item, i) => {
        aboutusHtml += `
             <div class="i-info4-cc clearfix i-1024mtl">

             <div class="contentbody fl">
               <div class="txt clearfix wow fadeInLeft" data-wow-delay="0.2s">
                 <p class="tit fl">关于我们</p>
                 <p class="subtit fontcc fl">About us</p>
               </div>
               <div class="desc wow fadeInLeft" data-wow-delay="0.2s">
                 <p>${item.tips}</p>
                 <p><a class="i-more fontcc wow fadeInLeft" href="about.html" data-wow-delay="0.3s">MORE<i
                       class="fa fa-angle-right"></i></a></p>
               </div>
   
   
             </div>
   
             <div class="mediabody fr wow fadeInUp" data-wow-delay="0.2s"> <a class="image"> <img class=" wow fadeInUp"
                   data-wow-delay="0s" src="${item.listimg}" /> </a> </div>
   
           </div>
             `
      })
      $('#aboutUs').html(aboutusHtml)
      $('#aboutMe').html(res.data.aboutus.remark)
      // 关于我们结束
      //  合作伙伴
      $('#partner').empty()
      var partnerList = res.data.partnerList
      var partnerHtml = ''
      partnerList.map((item, i) => {
        partnerHtml += `
        <div class="swiper-slide"> <a class="wow slideInUp" data-wow-delay="0.2s"><img
        src="${item.listimg}" /></a> </div>
             `
      })
      $('#partner').html(partnerHtml)

      $(document).ready(function () {
        var swiper = new Swiper('.il-sw14', {
          slidesPerView: 5,
          spaceBetween: 20,
          loop: true,
          navigation: {
            nextEl: '.sp-next',
            prevEl: '.sp-prev',
          },

          breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            }

          }
        });
      });
      // 合作伙伴结束


    } else {
      //do something
    }
  })

});