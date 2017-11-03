$(document).ready(function(){
$(".view1").hide();
$(".view2").hide();
  $(".title").delay(1000).fadeIn();
  $.when($(".title").delay(2000).fadeOut(2000)).done(function(){
  	$("div.container").remove();
  	$(".view1").show();
	  	$.when($(".submit-button").click(function(){
	  	$(".view1").hide();
	  	$(".view2").show();	
	  }));
  });
$(".backButton").click(function(){
		$("#notes").empty();
	  	$("#coinsLarge").empty();
	  	$("#coinsSmall").empty();	
	  	$(".view1").show();
	  	$(".view2").hide();
	  });


});