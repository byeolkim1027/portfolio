$(document).ready(function(){
    let menuName = $('.header')  // 상단에 고정할 메뉴 영역 선택자
		let menuItem = $('.header .gnb ul li') // data-link 값을 준 클릭할 요소의 선택자
		let sectionName
		let moveTop
		let areaTop
		let areaH
		let areaName
		let scrollTop
		menuItem.on('click', function(){
			sectionName = $(this).attr('data-link')
			moveTop = $('*[data-menu="'+sectionName+'"]').offset().top - menuName.height()
			$('html, body').animate({
				scrollTop : moveTop
			}, 500)
		})
		menuChk()
		$(window).scroll(function(){
			menuChk()
		})
		function menuChk(){
			scrollTop = $(window).scrollTop()
			$.each($('*[data-menu]'), function(idx, item){
				areaTop = $('*[data-menu]').eq(idx).offset().top
				areaH = $('*[data-menu]').eq(idx).height()
				areaName = $('*[data-menu]').eq(idx).attr('data-menu')
				if((scrollTop >= areaTop - menuName.height()) && (scrollTop < areaTop + areaH - menuName.height())){
					menuItem.removeClass('active')
					menuItem.siblings('[data-link="'+areaName+'"]').addClass('active')
				}else if(scrollTop < $('*[data-menu]').first().offset().top){
					menuItem.removeClass('active')
				}else if(scrollTop > $('*[data-menu]').last().offset().top + $('*[data-menu]').last().height()){
					menuItem.removeClass('active')
				}
			});
		}

		let didScroll;
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 150);

    function hasScrolled() {
        let st = $(this).scrollTop();
        
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        if (st > lastScrollTop && st > navbarHeight){
            $('header').removeClass('is_down').addClass('is_up');
        } else {
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('is_up').addClass('is_down');
            }
        }
        
        lastScrollTop = st;
    }
	
})