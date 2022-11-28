$(document).ready(function(){
    let didScroll
    let lastScrollTop = 0
    let delta = 5
    let navbarHeight = $('header').outerHeight()

    $(window).scroll(function(event){
        didScroll = true
    })

    setInterval(function() {
        if(didScroll) {
            hasScrolled()
            didScroll = false
        }
    },150)

    function hasScrolled() {
        let st = $(this).scrollTop()
        
        if(Math.abs(lastScrollTop - st) <= delta)
            return
        
        if (st > lastScrollTop && st > navbarHeight){
            $('header').removeClass('is_down').addClass('is_up')
        }else{
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('is_up').addClass('is_down')
            }
        }
        
        lastScrollTop = st
    }

})