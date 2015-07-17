$(window).on("scroll", function(e) {
    var scrollDistance = $(this).scrollTop();
    if(scrollDistance > 50) {
        $("body").addClass("scrolled");
    } else {
        $("body").removeClass("scrolled");
    }
});
