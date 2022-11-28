$(document).ready(function(){
    const swiper = new Swiper('.visual .popup', {

        effect: "fade",

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */


        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .popup .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .popup .btn_prev',  
        },
    })

    const swiperStay = new Swiper('.stay .stay_popup', { /* 팝업을 감싼는 요소의 class명 */

        loop: true,

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.stay .btn_paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },

        navigation: {  
            nextEl: '.stay .btn_next',  
            prevEl: '.stay .btn_prev',  
        },
    })

    const swiperRest = new Swiper('.rest .list', { /* 팝업을 감싼는 요소의 class명 */

        loop: true,
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
                spaceBetween: 20, 
            },
            1024: {  /* 1024px 이상이 되면 적용 */
                spaceBetween: 30,
            },
            1440: {  /* 1024px 이상이 되면 적용 */
                spaceBetween: 40,
            },
        },
        navigation: {
            nextEl: '.rest .btn_ctrl .btn_next',
            prevEl: '.rest .btn_ctrl .btn_prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.rest .swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'progressbar',  /* type fraction을 주면 paging이 숫자로 표시됨 */
	    },
    })


    /*페이지네이션으로 탭처럼 보여지게끔 하는 효과 */
    let dining_txt = ['BUFFET', 'RESTAURANTS', 'LOUNGE', 'BOUTIQUE', 'SPECIAL']
    const swiperDine = new Swiper('.dining .dining_popup', {
        effect: "fade",

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */


        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.dining .swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            renderBullet: function (index, className){
                return '<span class="swiper-pagination-bullet">' + dining_txt[index] + "</span>";
            },
        },
    })
    
    const swiperBanquet = new Swiper('.banquet .list', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
                // slidesPerView: 2,
                spaceBetween: 20, 
            },
            1000: {
                // slidesPerView: 3,
                spaceBetween: 30, 
            },
            1280: {
                // slidesPerView: 3,
                spaceBetween: 40, 
            },
        },
    });

    

})