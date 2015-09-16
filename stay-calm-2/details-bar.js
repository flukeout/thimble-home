var detailsBarHeight, detailsBar, bodyEl, scrollDistance;

$(document).on("ready",function(){
  bodyEl = $("body");
  detailsBar = $(".details-bar");
  detailsBarHeight = 64;

  detailsBar.on("mouseover",function(){
    if(scrollDistance >= detailsBarHeight){
      $(this).removeClass("scrolled");
    }
  });

  detailsBar.on("mouseout",function(){
    if(scrollDistance >= detailsBarHeight){
      $(this).addClass("scrolled");
    }
  });

  $(".mobile-icon").on("click",function(){
    alert("Show popup with info");
  });


});

$(window).on("scroll", function(e) {
  scrollDistance = $(this).scrollTop();
  if(scrollDistance >= detailsBarHeight) {
    detailsBar.addClass("scrolled");
  } else {
    detailsBar.removeClass("scrolled");
  }
});
