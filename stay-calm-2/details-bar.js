var detailsBarHeight, detailsBar, bodyEl, scrollDistance;
// var isTouchDevice = 'ontouchstart' in document.documentElement;
var closeDelay = 275;

$(document).on("ready",function(){


  bodyEl = $("body");
  detailsBar = $(".details-bar");

  if(isTouchDevice) {

    detailsBar.addClass("touch-mode");
    detailsBar.find(".thimble-logo").on("click",function(){
      detailsBar.removeClass("collapsed");
    });
    detailsBar.find(".close-details-bar").on("click",function(){
      detailsBar.addClass("collapsed");
    });


  } else {

    detailsBar.addClass("mouse-mode");

    detailsBar.on("mouseenter",function(){
      $(this).removeClass("collapsed");
    });

    detailsBar.on("mouseleave",function(){
      setTimeout(function(){
        closeBar();
      },closeDelay);
    });

  }


  // $(".mobile-icon").on("click",function(){
  //   showProjectInfo();
  // });

});

function closeBar(){
  detailsBar.addClass("collapsed");
}

// $(window).on("scroll", function(e) {
  // scrollDistance = $(this).scrollTop();
  // if(scrollDistance >= detailsBarHeight) {
  //   detailsBar.addClass("scrolled");
  // } else {
  //   detailsBar.removeClass("scrolled");
  // }
// });


