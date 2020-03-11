//编写轮播这个功能 模块化(同一个类型功能的函数，放在一起)
define(["jquery"], function($){
    function bannerTab(){
        var aBtns = $("#play").find("ol li");
        var oUl = $("#play").find("ul");
        var iNow = 0; //代表图片的下标
        var timer = null;  //定时器返回值

        aBtns.click(function(){
            iNow = $(this).index();
            tab();
        })

        //自动轮播
        timer = setInterval(function(){
            iNow++;
            tab();
        }, 2000);

        //移入和移出超过
        $("#play").mouseenter(function(){
            clearInterval(timer);
        })

        $("#play").mouseleave(function(){
            timer = setInterval(function(){
                iNow++;
                tab();
            }, 2000);
        })

        //切换
        function tab(){
            aBtns.removeClass("active").eq(iNow).addClass("active");
            
            if(iNow == aBtns.size()){
                aBtns.eq(0).addClass("active");
            }
        
            oUl.animate({
                top: -iNow * 150
            }, 600, function(){
                //动画结果
                if(iNow == aBtns.size()){
                    iNow = 0;
                    oUl.css("top", 0);
                }
            })
        }

    }
    return {
        bannerTab: bannerTab
    }
})