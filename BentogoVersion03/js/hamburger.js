$(document).read( function(){

	var width = $(window).width();

	if(width <352){
		$(".nav-toggle").removeClass("hidden");//hide menu elements if screen size is less than 352 pix
		$(".nav-toggle").addClass("shown");

		$("nav").hide();
	}

	$(".nav=toggle").click( function() {
		$("nav").slideToggle(500);

	});

});