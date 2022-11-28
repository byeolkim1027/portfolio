$(document).ready(function(){

    let scrolling
    scrollChk()

    $(window).scroll(function(){
        scrollChk()
    })
    function scrollChk(){
        scrolling=$(window).scrollTop()
        // console.log(scrolling,'스크롤 될때마다')

        if(scrolling>0){ // 스크롤중(스크롤링이 숫자 0 보다 크면)
            $('.header').addClass('fixed')
        }else{ // 맨위로 이동
            $('.header').removeClass('fixed')
        }
    }

    $('.header .tnb .lang .open').on('click',function(){
        $('.header .lang').addClass('lang_open')
    })
    $('.header .tnb .lang .close').on('click',function(){
        $('.header .lang').removeClass('lang_open')
    })

    let winW=$(window).width()
    let pcMobile //현재 pc 모드 인지 mobile 모드인지 알려주는 변수

    if(winW>1000){
        pcMobile='pc'
        console.log(pcMobile)
    }else{
        pcMobile='mobile'
        console.log(pcMobile)
    }
    /*윈도우 사이즈가 리사이즈 될때마다 pc모드인지 mobile 모드인지 알려주는 선언*/
    $(window).resize(function(){
        winW=$(window).width()
        if(winW>1000){
            pcMobile='pc'
            console.log(pcMobile)
        }else{
            pcMobile='mobile'
            console.log(pcMobile)
        }
    })

    /*pc버전에서 메뉴에 마우스를 오버했을때, 자연스럽게 아래로 애니메이션 됬다, 없어졌다 하는 효과
            ->원래는 addClass 로 클래스를 주고 햇었는데, slide up/down 으로 자연스럽게 효과를 준다*/
    $('.header .gnb>.gnb_wrap>ul>li>a').on('mouseenter focusin',function(){
        if(pcMobile=='pc'){
            $('.header .gnb>.gnb_wrap>ul>li>ul').slideDown()
            $('.header').addClass('menu_open')
        }    
    })
    $('.header').on('mouseleave',function(){
        if(pcMobile=='pc'){
            $('.header .gnb>.gnb_wrap>ul>li>ul').slideUp(200)//빨리 슬라이드 되서 사라지는 시간대(0.2초)
            $('.header').removeClass('menu_open')
        }    
    })

    let gnbStu 
    $('.header .gnb .gnb_open').on('click',function(){
        gnbStu=$('.header .gnb').hasClass('mobile_open')
        if(gnbStu==true){ //열린상태 - 닫는기능
            $('.header .gnb').removeClass('mobile_open')
            $('.header .logo').show()//메뉴가 클릭됬을때사라지는 요소들
            $('.visual .popup ul li .txt').show()
            $('.visual .popup .scroll').show()
        }else{ //닫힌상태 - 여는 기능
            $('.header .gnb').addClass('mobile_open')
            $('.header .logo').hide()
            $('.visual .popup ul li .txt').hide()
            $('.visual .popup .scroll').hide()
            $('.visual .popup .btn_ctrl').hide()
            $('.header .gnb>.gnb_wrap>ul>li.sub_open>ul').slideDown()
        }
    })

    $('.header .gnb>.gnb_wrap>ul>li>a').on('click', function(e){
        if(pcMobile=='mobile'){
            e.preventDefault()
            /* 1차 메뉴를 클릭했을때 a href 로 페이지가 자동으로 이동하는 현상 막기*/
            let menu_st=$(this).parents('li').hasClass('sub_open')
            if(menu_st==true){
                $(this).next().slideUp()
                $(this).parents('li').removeClass('sub_open')
            }else{
                $(this).next().slideDown()
                $(this).parents('li').addClass('sub_open')
            }
            // $(this).parents('li').toggleClass('sub_open')
        }
        
    })

})