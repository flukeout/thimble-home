var colors = ["#3A3365",
"#469023",
"#DA4031",
"#D540C0",
"#D23870",
"#5D6DC2",
"#7E261E",
"#5B1737",
"#993F8A",
"#2C5310",
"#9861DB",
"#B25B15"];

$(document).ready(function(){
  var randomIndex =  Math.floor(Math.random() * colors.length);
  $("body").css("background",colors[randomIndex]);
});