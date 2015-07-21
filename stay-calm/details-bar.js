$(window).on("scroll", function(e) {
    var scrollDistance = $(this).scrollTop();
    if(scrollDistance >= 64) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }
});
