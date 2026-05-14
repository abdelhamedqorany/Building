//hide ,, show ,, fade ,, slideUp ,,, slideDown ,, slideToggle
//$('.test').slideUp(3000)

$(".btn").click(function(){
    $('.test').slideDown(3000 , function(){
        $('.test').css( "background","#555") 
        $('.test').animate({height:"400px"},3000) 
    }) 
    
})

$(document).ready(function(){
    $(".loading").fadeOut(3000 ,function(){
        $("body").css("overflow","auto")
    })
})

$(".test").click(function(){
    $(".test").addClass("test2")
})

$(window).scroll(function(){
    let scroll_top = $(window).scrollTop()
    if(scroll_top > 200)
    {
        $("#up").fadeIn(500)
    }
    else
    {
        $("#up").fadeOut(500)
    }
})
$(window).scroll(function(){
    let scroll_top = $(window).scrollTop()
    if(scroll_top > 80)
    {
        $(".black-navbar").addClass("black-navbar_2")
    }
    else
    {
        $(".black-navbar").removeClass("black-navbar_2")
    }
})

