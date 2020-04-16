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
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
		]
	});

	// Match height plugin
	$('.recent-slider-item').matchHeight({
		byRow: 0
	});

	// counter up js 
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
});