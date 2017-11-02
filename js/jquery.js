$(document).ready(function(){
$(".view1").hide();
  $(".title").delay(1000).fadeIn();
  $.when($(".title").delay(2000).fadeOut(2000)).done(function(){
  	$("div.container").remove();
  	$(".view1").show();
  });
  
  

});