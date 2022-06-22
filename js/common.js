
$(document).ready(function() {

// ADD CSS CLASS TO toggle_mnu

	$(".top_mnu ul li a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".menu-button").click(function() {
		$(this).toggleClass('open');
		$(".sandwich").toggleClass("active");
	});

	$(".menu-button").click(function () {
		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");

		} else {
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});


});


