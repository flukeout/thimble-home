var detailsBarHeight, detailsBar, bodyEl, scrollDistance;
var isTouchDevice = 'ontouchstart' in document.documentElement;

$(document).on("ready",function(){
  bodyEl = $("body");
  detailsBar = $(".details-bar");

  if(isTouchDevice) {
    $(".details-bar").addClass("touch-mode");
  } else {
    $(".details-bar").addClass("mouse-mode");
  }

  $(".mouse-bar").on("mouseenter",function(){
    $(this).removeClass("collapsed");
  });

  $(".mouse-bar").on("mouseleave",function(){
    $(this).addClass("collapsed");
  });

  $(".close-details-bar").on("click",function(){
    $(".touch-bar").addClass("collapsed");
    return false;
  });

  $(".thimble-button").on("click",function(){
    $(".touch-bar").removeClass("collapsed");
    return false;
  });

});

function closeBar(){
  detailsBar.addClass("collapsed");
}

