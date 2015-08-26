var detailsBarHeight, detailsBar, bodyEl;

$(document).on("ready",function(){
    bodyEl = $("body");
    detailsBar = $(".details-bar");
    detailsBarHeight = 64;
    var currentPadding = parseInt(bodyEl.css("padding-top"));
    bodyEl.css("padding-top",currentPadding + detailsBarHeight);
});

$(window).on("scroll", function(e) {
    var scrollDistance = $(this).scrollTop();
    if(scrollDistance >= detailsBarHeight) {
        detailsBar.addClass("scrolled");
    } else {
        detailsBar.removeClass("scrolled");
    }
});
