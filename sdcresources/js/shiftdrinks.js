$(document).ready(function(){
    
    $(".js--scrollWatch").click(function (){
        $("html, body").animate({scrollTop: $(".js--watch").offset().top}, 1000);
    });
    
    $(".js--scrollAbout").click(function (){
        $("html, body").animate({scrollTop: $(".js--about").offset().top}, 1000);
    });

    $(".js--scrollContact").click(function (){
        $("html, body").animate({scrollTop: $(".js--contact").offset().top}, 1000);
    });

});
