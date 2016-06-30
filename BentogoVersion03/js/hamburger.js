$(document).ready(
	function() {

	console.log("jQuery is ready!");

	var width = $(window).width();
	console.log("Window width = "+width);

	if (width < 1000){

		$(".nav-toggle").removeClass("hidden");//hide menu elements if screen size is less than 352 pix
		$(".nav-toggle").addClass("shown");

		$("nav").hide();
	}

	$(".nav-toggle").click( 
		function() {
			$("nav").slideToggle(500);

		}

	);
}

);