$(document).ready(function(){
    var originalHeight = $(".main").height();
    $('.main').hover(function() {
        $(this).animate({
            height: '400px'
        }, 500);
    }, function() {
        $(this).animate({
            height: originalHeight
        }, 300);
    });


});

