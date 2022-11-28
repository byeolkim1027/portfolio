$(document).ready(function(){
    const swiper = new Swiper('.popup', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.btn_paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            /*type: 'fraction',   type fraction을 주면 paging이 숫자로 표시됨 */
        },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.btn_prev',  
        },

    })//swiper 세팅

    $('.visual .popup .ctrl_wrap .btn_wrap').on('click',function(){
        $(this).parents('.btn_wrap').addClass('play')
    })
    $('.visual .popup .ctrl_wrap .btn_wrap').on('click',function(){
        $(this).parents('.btn_wrap').removeClass('play')
    })



    $('.visual .popup .ctrl_wrap .btn_wrap .btn_play').on('click',function(){
        swiper.autoplay.start();  /* 재생 기능 */
        $('.visual .popup .ctrl_wrap .btn_wrap').removeClass('play')
    })
    $('.visual .popup .ctrl_wrap .btn_wrap .btn_stop').on('click',function(){
        swiper.autoplay.stop();  /* 일시정지 기능 */
        $('.visual .popup .ctrl_wrap .btn_wrap').addClass('play')
    })


    
    $('.notice ul li').on('click',function(){
        $('.notice ul li').removeClass('active')
        $(this).addClass('active')
    })

    const swiper_health = new Swiper('.health .list', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
                spaceBetween: 20, 
            },
            1000: {
                spaceBetween: 30, 
            },
            1280: {
                spaceBetween: 40, 
            },
            
        },
        navigation: {
            nextEl: '.health .btn_next',
            prevEl: '.health .btn_prev',
        },
    });

    AOS.init();


})