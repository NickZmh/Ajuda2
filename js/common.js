
$(document).ready(function() {

// ADD CSS CLASS TO toggle_mnu

	$(".top_mnu ul li a").click(function(e) {

		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".menu-button").click(function() {
		$(this).toggleClass('open');
		$(".sandwich").toggleClass("active");
	});

	$(".menu-button").click(function (e) {
		e.preventDefault();
		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");

		} else {
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});


	var stickyHeader = jQuery('.sticky-header');

    jQuery(window).scroll(function() {
        if( stickyHeader.offset().top > 0 ) {
            stickyHeader.addClass('sticky')
        } else {
            stickyHeader.removeClass('sticky')
        }
    });


});


