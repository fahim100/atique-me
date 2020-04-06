$(document).ready(function() {

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
		
	var dataId = $('.slick-current').attr("data-slick-index");    
    console.log(dataId);
});