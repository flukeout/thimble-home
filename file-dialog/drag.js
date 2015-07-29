$(document).ready(function(){

    console.log("hi");
    $(".drop-zone").on("dragenter",function(){
        $(".drag-files-area").addClass("drag-over");
    });
    $(".drop-zone").on("dragleave",function(){
        $(".drag-files-area").removeClass("drag-over");
    });
});