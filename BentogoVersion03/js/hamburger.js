$(document).ready(
	function() {

	console.log("jQuery is ready!");

	var width = $(window).width();
	console.log("Window width = "+width);

	if (width < 430){

		$(".nav-toggle").removeClass("hidden");//hide menu elements if screen size is less than 352 pix
		$(".nav-toggle").addClass("shown");

		$(".button-nav").hide();
	}

	$(".nav-toggle").click( 
		function() {
			$(".grid-navbuttons").slideToggle(500);

		}

	);
}

);