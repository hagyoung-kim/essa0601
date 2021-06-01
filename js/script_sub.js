$(window).load(function(){
    mainNav();
    headerScroll();
    headerEventSlider();
    noticeSlider();
    
    contentHoverIcon();
    subBestSlider();
//   PageNum();
    
    quickTop();
    
    subEvent();
    
//    navFabric();
//    navLiving();
    
//    navBtn();
    PageNumBtn();
    
})



function quickTop(){
    var $quick = $("#quick_top");
    
    
    $(document).on("scroll", scrollEvent);
    
    scrollEvent();
    
    
    function scrollEvent(){
        var scrollHeight = $(document).scrollTop();
        console.log(scrollHeight);
         if(scrollHeight >= 4000){
             //alert("00")
            $quick.css("bottom",550);
             
        }else{
            $quick.css("bottom",30);
        }
    }
}




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



function contentHoverIcon(){
    
    $("#best_list > ul >li").on("mouseenter", onBox)
    $("#best_list > ul >li").on("mouseleave", offBox)
    $(".list > ul >li").on("mouseenter", onBox)
    $(".list > ul >li").on("mouseleave", offBox)
    
    
    function onBox(){
        $(".img_box").stop();
        $(this).show();
        $("p.txt").stop();
        $(this).css({"text-decoration":"underline"});
    }
    
    function offBox(){
        $(this).stop();
        $(this).css({"text-decoration":"none"});
    }
}



function subBestSlider(){
    $("#best_list").slick({
        
        slide: "ul",
        slideToShow : 1,
        autoplay:true,
        fade:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        dots:false,
        arrows:true,
    })
}




//function navBtn(){
//    var $menu = $("#menu_nav").find("a");
//    var $view = $(".list_wrap .list");
//    
//    $view.hide();
//    $view.eq(0).show();
//    $menu.eq(0).addClass("selected");
//    
//    $menu.on("click", onMenu)
//        
//    function onMenu(){
//        var clickNum = $menu.index($(this));
//         
//        $menu.removeClass("selected");
//        $(this).addClass("selected");
//        
//        $view.hide();
//        $view.eq(clickNum).show();
//        
//        return false;
//        
//    }
//}




//function PageNum(){
//    
//    var $num = $(".page_num").find("a");
//    var $product = $(".list > ul");
//    
//    
//    $product.hide();
//    $product.eq(0).show();
//    $num.eq(0).addClass("select");
//    
//    $num.on("click", onShowlist);
//
//    
//    function onShowlist(){
//        var clickNum = $num.index($(this));
//        
//        $num.removeClass("select");
//        $(this).addClass("select");
//        
//        $product.hide();
//        $product.eq(clickNum).show();
//        
//        return false;
//    }
//}


function PageNumBtn(){
    $(".list").slick({
        
        slide: "ul",
        slideToShow : 1,
        autoplay:false,
        fade:false,
        pauseOnHover:false,
        dots:true,
        arrows:true,
        prevArrow : "<button class = 'slick-prev'>Prev</button>",
    })
    
}






function subEvent(){
    $(".sofa_img ul").slick({
        
        slide: "li",
        slideToShow : 1,
        autoplay:true,
        fade:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        dots:false,
        arrows:false,
    })
}










