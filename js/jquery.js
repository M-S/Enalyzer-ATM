$(".view1").hide();
$(".view2").hide();
$(document).ready(function(){
  $.when($(".title").delay(2000).fadeOut(2000)).done(function(){
  	$("div.container").remove();
  	$(".view1").fadeIn();
  	$(".number-keys").click(function(){
		$(".submit-button").addClass('active');
	  });
	  	$.when($(".submit-button").click(function(){
	  	$(".view1").hide();
	  	$(".view2").fadeIn();	
	  }));
  });
$(".backButton").click(function(){
	    $("#error").empty();
		$("#notes").empty();
	  	$("#coinsLarge").empty();
	  	$("#coinsSmall").empty();	
	  	$(".view1").show();
	  	$(".view2").hide();
	  });


});