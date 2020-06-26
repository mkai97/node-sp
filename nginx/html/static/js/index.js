
//向上
$(function(){
	$(window).scroll(function(){
		var _top = $(window).scrollTop();
		if(_top>300){
			$('.db_xs').fadeIn(600);
		}else{
			$('.db_xs').fadeOut(600);
		}
	});
	$(".db_xs").click(function(){
		$("html,body").animate({scrollTop:0},500);
	});
});




//顶部导航
$(function(){
    $(window).scroll(function(){
        var _top = $(window).scrollTop();
        if(_top > 50){
            $('.ix-header').addClass('active');
            $('.logo-img').attr('src','images/logo-img.png')
        }else{
            $('.ix-header').removeClass('active');
            $('.logo-img').attr('src','images/logo.png')
        }
    });
});



//内页导航
$(function () {
    $(window).scroll(function () {
        var _top = $(window).scrollTop();
        if (_top > 100) {
            $('.pg-head').addClass("xs");
        } else {
            $('.pg-head').removeClass("xs");
            $('.pg-head').addClass("as");
        }
    });

});


//电脑banner
     var swiper = new Swiper('.ix-banner.swiper-container',{
        nextButton: '.ix-banner .swiper-button-next',
        prevButton: '.ix-banner .swiper-button-prev',
        autoplay: 5000,
        autoplayDisableOnInteraction: false
     });

     //手机banner
     var swiper = new Swiper('.ix-m-banner', {
        pagination: '.ix-m-banner .swiper-pagination',
        paginationClickable: true
    });
  
  //主营业务
  var swiper = new Swiper('.ix-list-1 .swiper-container', {
    pagination: '.ix-list-1 .swiper-pagination',
    nextButton: '.ix-list-1 .swiper-button-next',
    prevButton: '.ix-list-1 .swiper-button-prev',
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 40,
    breakpoints: {
          1024: {
              slidesPerView: 4,
              spaceBetween: 40
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 20
          },
          640: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          320: {
              slidesPerView: 2,
              spaceBetween: 10
          }
      }
});
   
    
      
//菜单效果

    $(document).ready(function () {


        var bodyheight = $(window).height();
        $(".leftcontrol").css("height", bodyheight + "px");
        $(".hassub").click(function () {
            
            var thisli = $(this).parent();
            var thisul = thisli.find(".subnav");
            var thisheight = thisul.find("li").length * 50;
            if (thisli.hasClass("active")) {
                thisul.css("height", thisheight + "px");
                thisli.removeClass("active");
                setTimeout(function () { thisul.css("height", "0px"); }, 100);
            }
            else {
                thisli.addClass("active");
                thisul.css("height", thisheight + "px");
            }
        });
        });
        
        $(window).resize(function () {
        var bodyheight = $(window).height();
        $(".leftcontrol").css("height", bodyheight + "px");
        });
        
        function openlogoheader() {
        $(".leftcontrol").toggleClass("open");
        $(".nav-bg").toggleClass("open");
        $(".leftcontrolbg").toggleClass("hidden");
        }
        
        //产品详情
        var swiper = new Swiper('.pdl-lb', {
          pagination: '.pdl-pagin',
          paginationClickable: true
        });

        
        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
            new WOW().init();
        };


        // 
        $(document).ready(function () {


            var bodyheight = $(window).height();
            $(".rightcontrol").css("height", bodyheight + "px");
            $(".hassub").click(function () {
                
                var thisli = $(this).parent();
                var thisul = thisli.find(".subnav");
                var thisheight = thisul.find("li").length * 50;
                if (thisli.hasClass("active")) {
                    thisul.css("height", thisheight + "px");
                    thisli.removeClass("active");
                    setTimeout(function () { thisul.css("height", "0px"); }, 100);
                }
                else {
                    thisli.addClass("active");
                    thisul.css("height", thisheight + "px");
                }
            });
            });
            
            $(window).resize(function () {
            var bodyheight = $(window).height();
            $(".rightcontrol").css("height", bodyheight + "px");
            });
            
            function openlogoheader() {
            $(".rightcontrol").toggleClass("open");
            $(".nav-bg").toggleClass("open");
            $(".leftcontrolbg").toggleClass("hidden");
            }
        // 

        
        /*案列轮播*/
        var swiper = new Swiper('.swiper-container.pdl-lb', {
            pagination: '.pdl-pagin',
            paginationClickable: true,
            centeredSlides: true,
            paginationClickable: true,
            autoplay: 3000,
            autoplayDisableOnInteraction: false
          });