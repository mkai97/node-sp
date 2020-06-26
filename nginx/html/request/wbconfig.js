/*
 * @Author: your name
 * @Date: 2020-06-03 15:17:27
 * @LastEditTime: 2020-06-19 19:09:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \officialWebsite\request\wbconfig.js
 */

function selectNav(nav) {
    
     activeNav = nav
     localStorage.setItem('Nav',nav)
}
$(function () {
    var activeNav = localStorage.getItem('Nav')?localStorage.getItem('Nav'):'index'

// 头部导航
var hearder_PC =`
<ul class="nav clearfix">
<li onClick="selectNav('index')" class="navitem"><a class="${activeNav=='index'?'active':''}" href="index.html"><span data-title="首页">首页</span></a></li>
<li onClick="selectNav('about')" class="navitem"><a class="${activeNav=='about'?'active':''}" href="about.html" class=""><span data-title="关于我们">关于我们</span> 
 
</a>
            
</li>
<li onClick="selectNav('product_list')" class="navitem"><a class="${activeNav=='product_list'?'active':''}" href="product_list.html"><span data-title="产品中心">产品中心</span></a>

</li>
<li onClick="selectNav('business')" class="navitem"><a class="${activeNav=='business'?'active':''}" href="business.html"><span data-title="业务介绍">业务介绍</span></a>

</li>
<li onClick="selectNav('case_list')" class="navitem"><a class="${activeNav=='case_list'?'active':''}" href="case_list.html"><span data-title="案例展示">案例展示</span></a>

</li>


<li onClick="selectNav('question')" class="navitem"><a class="${activeNav=='question'?'active':''}" href="question.html"><span data-title="常见问题">常见问题</span></a>
</li>

<li onClick="selectNav('news_list')" class="navitem"><a class="${activeNav=='news_list'?'active':''}" href="news_list.html"><span data-title="行业资讯">行业资讯</span></a>

</li>
<li onClick="selectNav('message')" class="navitem"><a class="${activeNav=='message'?'active':''}" href="message.html"><span data-title="留言反馈">留言反馈</span></a></li>
<li onClick="selectNav('contact')" class="navitem"><a class="${activeNav=='contact'?'active':''}" href="contact.html"><span data-title="联系我们">联系我们</span></a></li>
</ul>
`
var hearder_M =`  <ul><li><span class="iconfont close " onclick="openlogoheader()">X</span></li>
<li><a href="index.html"><span class="circle"></span>首页</a></li>
<li class="twoitem">
    <a href="about.html" class="hassub">
        <span class="circle"></span>关于我们
        <!-- <span class="more"><span class="h"></span><span class="h v"></span></span> -->
</a>
<!--
     <ul class="subnav" style="height:0;">
        <li><a href="about.html"><i class="fa fa-angle-right"></i>公司介绍</a></li>
         <li><a href="about.html"><i class="fa fa-angle-right"></i>企业文化</a></li>
        <li><a href="about.html"><i class="fa fa-angle-right"></i>资质荣誉</a></li>
        <li><a href="about.html"><i class="fa fa-angle-right"></i>销售网络</a></li> 
    </ul> -->

</li>
<li class="twoitem"><a href="product_list.html" class="hassub"><span class="circle"></span>产品中心
    <!-- <span class="more"><span class="h"></span><span class="h v"></span></span> -->
</a>
<!--
     <ul class="subnav" style="height:0;">
        <li><a href="product_list.html"><i class="fa fa-angle-right"></i>全部</a></li>
        <li><a href="product_list.html"><i class="fa fa-angle-right"></i>办公椅子</a></li>
        <li><a href="product_list.html"><i class="fa fa-angle-right"></i>舒适沙发</a></li>
        <li><a href="product_list.html"><i class="fa fa-angle-right"></i>个性桌子</a></li>
        <li><a href="product_list.html"><i class="fa fa-angle-right"></i>精致灯饰</a></li> 
    </ul> -->
</li>
<li><a href="business.html"><span class="circle"></span>业务介绍</a></li>
<!-- <li><a href="peo_list.html"><span class="circle"></span>核心团队</a></li>
<li><a href="service.html"><span class="circle"></span>售后服务</a></li>

<li><a href="question.html"><span class="circle"></span>常见问题</a></li> -->

<li><a href="case_list.html"><span class="circle"></span>案例展示</a></li>
<li><a href="news_list.html"><span class="circle"></span>新闻资讯</a></li>
<li><a href="message.html"><span class="circle"></span>留言反馈</a></li>
<li><a href="contact.html"><span class="circle"></span>联系我们</a></li>
</ul>
`
var hearder_M2 =`  <ul><li><span class="iconfont close " onclick="openlogoheader2()">X</span></li>
<li><a href="index.html"><span class="circle"></span>首页</a></li>
<li class="twoitem">
    <a href="about.html" class="hassub">
        <span class="circle"></span>关于我们
        <!-- <span class="more"><span class="h"></span><span class="h v"></span></span> -->
</a>
<!--
     <ul class="subnav" style="height:0;">
        <li><a href="about.html"><i class="fa fa-angle-right"></i>公司介绍</a></li>
         <li><a href="about.html"><i class="fa fa-angle-right"></i>企业文化</a></li>
        <li><a href="about.html"><i class="fa fa-angle-right"></i>资质荣誉</a></li>
        <li><a href="about.html"><i class="fa fa-angle-right"></i>销售网络</a></li> 
    </ul> -->

</li>
<li class="twoitem"><a href="product_list.html" class="hassub"><span class="circle"></span>产品中心
    <!-- <span class="more"><span class="h"></span><span class="h v"></span></span> -->
</a>
<!--
     <ul class="subnav" style="height:0;">
        <li><a href="product_list.html"><i class="fa fa-angle-right"></i>全部</a></li>
        <li><a href="product_list.html"><i class="fa fa-angle-right"></i>办公椅子</a></li>
        <li><a href="product_list.html"><i class="fa fa-angle-right"></i>舒适沙发</a></li>
        <li><a href="product_list.html"><i class="fa fa-angle-right"></i>个性桌子</a></li>
        <li><a href="product_list.html"><i class="fa fa-angle-right"></i>精致灯饰</a></li> 
    </ul> -->
</li>
<li><a href="business.html"><span class="circle"></span>业务介绍</a></li>
<!-- <li><a href="peo_list.html"><span class="circle"></span>核心团队</a></li>
<li><a href="service.html"><span class="circle"></span>售后服务</a></li>

<li><a href="question.html"><span class="circle"></span>常见问题</a></li> -->

<li><a href="case_list.html"><span class="circle"></span>案例展示</a></li>
<li><a href="news_list.html"><span class="circle"></span>新闻资讯</a></li>
<li><a href="message.html"><span class="circle"></span>留言反馈</a></li>
<li><a href="contact.html"><span class="circle"></span>联系我们</a></li>
</ul>
`

$('#hearder_PC').html(hearder_PC)
$('#hearder_M').html(hearder_M)
$('#hearder_M2').html(hearder_M2)






//  导航结束

    var res = []
    getWbconfig({}).then(res => {
        console.log(res)
        $('.companyName').html(res.data.companyName)
        $('.address').html('地址：' + res.data.address)
        $('.phone').html('电话：' + res.data.phone)
        // $('.website').html(`<a href='${res.data.website}'>官网：${res.data.website}</a>`)
        $('.tel').html('座机：'+res.data.zuoji)
        // $('.website').html(`官网：${res.data.website}`)
        $('.email').html('邮箱：' + res.data.email)
        $('.cyNameAndYear').html(2020 + ' ' + res.data.companyName)
        $('.contactpersonAndPhone').html('联系人：' + res.data.contactperson + ' (手机：' + res.data.phone + ')')
        $('.logo').attr('src', res.data.logo)
        $('#qrcode').attr('src', res.data.QRcode)
        $('#beian').html(res.data.beian)
        $('#beian').attr('class','beian-center')
        
        res = res
        // 公司数字数据

        var str = []
        var num = []
        str.push(res.data.data1.split(' ')[0])
        num.push(res.data.data1.split(' ')[1])
        str.push(res.data.data2.split(' ')[0])
        num.push(res.data.data2.split(' ')[1])
        str.push(res.data.data3.split(' ')[0])
        num.push(res.data.data3.split(' ')[1])
        num.push(res.data.data4.split(' ')[1])
        str.push(res.data.data4.split(' ')[0])
        console.log(str, num)
        $('.number1').html(num[0])
        $('.number2').html(num[1])
        $('.number3').html(num[2])
        $('.number4').html(num[3])
        $('.title1').html(str[0])
        $('.title2').html(str[1])
        $('.title3').html(str[2])
        $('.title4').html(str[3])


        // 公司数字数据
    })
    getIndex({}).then(res => {
        // 底部产品展示
        var html1 = ''
        res.data.productList.map(item => {
            if (item.name.length > 6) {
                item.name = item.name.substring(0, 5) + '...'

            }
            html1 += `
            <a href='product_detail.html?id=${item.id}' >${item.name}</a>
            `
        })
        $('#mainService').after(html1)

        // 底部案例展示
        var html2 =''
        res.data.caseList.map(item => {
            if (item.name.length > 6) {
                item.name = item.name.substring(0, 5) + '...'

            }
            html2 += `
            <a href='case_detail.html?id=${item.id}' >${item.name}</a>
            `
        })
        html2 = html2 + ` <a href='case_list.html' >更多案例...</a>`
        $('#mainCase').after(html2)


    })
})


function openlogoheader2() {
    $(".rightcontrol").toggleClass("open");
    $(".rightcontrolbg").toggleClass("hidden");
  }