$(document).ready(function(){
    $('.health ul li').on('click',function(){
        $('.health ul li').removeClass('active')
        $(this).addClass('active')
    })

    const swiperProduct = new Swiper('.product .list', { /* 팝업을 감싼는 요소의 class명 */

        loop: true,
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
                spaceBetween: 16, 
            },
            1000: {  /* 1024px 이상이 되면 적용 */
                spaceBetween: 20,
            },
            1440: {  /* 1024px 이상이 되면 적용 */
                spaceBetween: 30,
            },
        },
    })

    AOS.init();

})