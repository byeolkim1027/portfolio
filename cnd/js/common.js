$(document).ready(function(){
    $('.header .lang .open').on('click',function(){
        $('.header .lang').addClass('lang_open')
    })
    $('.header .lang .close').on('click',function(){
        $('.header .lang').removeClass('lang_open')
    })
})