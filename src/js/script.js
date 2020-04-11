$(document).ready(function() {

	// headroom Plugin
	var myElement = document.querySelector(".headroom");
	var headroom  = new Headroom(myElement);
	headroom.init();

    // Recent Article slider
	$('.recent-slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
	});

	// Match height plugin
	$('.recent-slider-item').matchHeight({
		byRow: 0
	});
});