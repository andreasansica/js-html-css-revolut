

$(document).ready(function () {

// click navbar menu
  $('li.dropitem').click(function () {

    var block = $(".dblock")

    if ($(this).find(".dropdown").hasClass("dblock")) {
     block.removeClass("dblock");
   } else {
     block.removeClass("dblock");
     $(this).find(".dropdown").addClass("dblock");
   }
   });



// click hamburger menu
   $( ".hamburger" ).click( function() {
   $( ".menu_right" ).toggleClass( "menu_right_open");
 });












});
