

$(document).ready(function () {


  $('li.dropitem').click(function () {



    if ($(this).children(".dropdown").hasClass("dblock")) {
     $(".dblock").removeClass("dblock");
   } else {
     $(".dblock").removeClass("dblock");
     $(this).children(".dropdown").addClass("dblock");
   }

 });







});
