$(window).load(function(){
    mainNav();
    headerScroll();
    headerEventSlider();
    noticeSlider();
    visualSlider();
    contentHoverIcon();
    collaboTab();
    eventSlider();
    serviceSlider();
//    serviceTab();
    instaHover();
    quickTop();
})


/*menu mouseenter*/
function mainNav(){
    var $subbg = $("<div class='subbg'></div>");
    var $searchBg = $("<div class='searchbg'></div>");
    
    $subbg.appendTo("#nav#gnb");
    $searchBg.appendTo("#nav#gnb");
    
    $("#gnb .submenu_list, .subbg").slideUp(0);
    $(".search_box, .searchbg").slideUp(0);
    
    $("#gnb > ul > li > a").on("mouseenter", onMenuShow);
    $("#gnb").on("mouseleave", outMenu);
    $(".submenu_list > ul").children().last().on("focusout", outMenu);
    
    $("#search > a").on("click", onSearchShow)
    $("#search").on("mouseleave", outSearch)

    function onSearchShow(){
        $(".search_box, .searchbg").stop();
        $(".search_box, .searchbg").slideDown(500);
        $("#search > a").css({"background-position":"-27px"});
        
        return false;
    }
    function outSearch(){
        $(".search_box, .searchbg").stop();
        $(".search_box, .searchbg").slideUp(300);
        $("#search > a").css({"background-position":"0px"});
    }

    function onMenuShow(){
        $(".submenu_list, .subbg").stop();
        $(".submenu_list, .subbg").slideDown(500);
    }
    function outMenu(){
        $(".submenu_list, .subbg").stop();
        $(".submenu_list, .subbg").slideUp(300);
    }
}

function headerScroll(){
    $(window).on("scroll", onScroll)
    
    function onScroll(){
        var headerTop = $(window).scrollTop();
        var headerWidth = $(window).outerWidth();
        
        if(headerTop >= 50 && headerWidth >= 1200){
            $("#header_wrap").addClass("on");
        }else{
            $("#header_wrap").removeClass("on");
        }
    }    
}


function visualSlider(){
    $("#visual_slider").slick({
        
        slide:"li",
        autoplay:true,
        fade:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        dots:true,
        arrows:true,
    })
}

function headerEventSlider(){
    $("#top_event").slick({
        slide:"li",
        autoplay:true,
        fade:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        dots:false,
        arrows:false,
    })
}


function noticeSlider(){
    $(".notice_box").slick({
        slide:"li",
        autoplay:true,
        fade:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        dots:false,
        arrows:false,
    })
}



    function quickTop(){
    var $quick = $("#quick_top");
    
    
    $(document).on("scroll", scrollEvent);
    
    scrollEvent();
    
    
    function scrollEvent(){
        var scrollHeight = $(document).scrollTop();
        console.log(scrollHeight);
         if(scrollHeight >= 9000){
             //alert("00")
            $quick.css("bottom",550);
             
        }else{
            $quick.css("bottom",30);
        }
    }
}



function contentHoverIcon(){
    
    $(".product > ul >li").on("mouseenter", onBox)
    $(".product > ul >li").on("mouseleave", offBox)

    
    
    function onBox(){
        $(".img_box").stop();
        $(this).show();
        $("p.txt").stop();
        $(this).css({"text-decoration":"underline", "text-decoration-color":"#ffffff"});
    }
    
    function offBox(){
        $(this).stop();
        $(this).css({"text-decoration":"none"});
    }
}



function collaboTab(){
    var $menu = $("#collabo_menu").find("a");
    var $list = $("#collabo_list > ul > li");
    
    $list.hide();
    $list.eq(0).show();
    $menu.eq(0).addClass("selected");
   
    
    $menu.on("click", onShow);
    
    function onShow(){
        var clickNum = $menu.index($(this));
        
        $menu.removeClass("selected");
         $(this).addClass("selected");
        
        $list.hide();
        $list.eq(clickNum).show();

        
        return false;
    } 
}


function eventSlider(){
    $(".event_right").slick({
        slide:"ul",
        slideToShow : 1,
        autoplay:true,
        fade:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        dots:false,
        arrows:true,
    })
}



function serviceSlider(){
    $("#service_inner").slick({
        
        slide:"ul",
        slidesToShow : 1,
        autoplay:true,
        fade:true,
        autoplaySpeed:3000,
        pauseOnHover:false,
        dots:false,
        arrows:false,
    })
}



function instaHover(){
    $("#insta_list > ul > li").on("mouseenter", onInsta)
    
    function onInsta(){
        $(".img_box02").stop();
        $(this).show();
    }
}





























