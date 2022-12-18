$(document).ready(function(){
    
    // const myFullpage = new fullpage('#fullpage',{}; 이렇게만 사용해도 fullpage는 기본작동함

    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'right', /* 위치 */
		navigationTooltips: ['메인', '보건통계', '사업소개', '현장소식', '지원사업'], /* 툴팁 */
		showActiveTooltip: false, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기/보이기 */


        /* default 값이라서 안줘도 됨 */
		/*autoScrolling:true,  한페이지씩 스크롤 */
		/*scrollHorizontally: true, */
        /*verticalCentered: true,  컨텐츠 요소 위아래 가운데 */

		afterLoad: function(origin, destination, direction, trigger){
			console.log(destination.index)
			if((destination.index==2)||(destination.index==3)||(destination.index==4)||(destination.index==5)){
				$('.header').addClass('black')
				$('#fp-nav').addClass('black')
			}else{
				$('.header').removeClass('black')
				$('#fp-nav').removeClass('black')
			}
			if(destination.index==1){ //보건통계 슬라이드가 나타났을때(1은 그 화면을 나타냄)
				funNumber() // 함수 이름이 funNumber 인것을 실행하는명령
			}
		},
        
        responsiveWidth: 640   /*fullpage를 적용시키지 않을 모바일 사이즈 */
        
	});//fullpage finished

	/*보건통계 숫자 카운팅 효과*/
	function funNumber(){
		console.log('움직임')
		$('.numbers .rate ul li .num strong').counterUp()
	}

	/*현장소식에 swipe 효과주기*/
	const swiper = new Swiper('.news .list', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			500: {    /* 500px 이상일때 적용 */
				slidesPerView: 2,
				spaceBetween: 20,
			},
			800: {    /* 800px 이상일때 적용 */
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1000: {    /* 1000px 이상일때 적용 */
				slidesPerView: 4,
				spaceBetween: 30,
			},
			1200: {    /* 1200px 이상일때 적용 */
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.btn_paging', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		},

	});

	let scrolling //변수선언
    scrollChk()

    $(window).scroll(function(){
        scrollChk() //함수실행 - header 고정
    })

	function scrollChk(){//함수선언
        scrolling=$(window).scrollTop()
        console.log(scrolling)
        if(scrolling>0){
            $('.header').addClass('fixed')
        }else{
            $('.header').removeClass('fixed')
        }
    }

})//document.ready finished