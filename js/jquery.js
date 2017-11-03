$(document).ready(function(){
$(".view1").hide();
$(".view2").hide();
  $(".title").delay(1000).fadeIn();
  $.when($(".title").delay(2000).fadeOut(2000)).done(function(){
  	$("div.container").remove();
  	$(".view1").show();
	  	$.when($(".submit-button").click(function(){
	  	$("div.view1").remove();
	  	$(".view2").show();	
	  }));
  });

});