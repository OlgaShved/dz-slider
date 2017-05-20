$(document).ready(function(){
	$('.ba-slider').slick({
	 	slidesToShow: 3,
		slidesToScroll: 3,
		speed: 100,
  		infinite:true,
		centerMode:true,
		slide: ".slide-show",
		prevArrow: ".ba-slider__prev",
		nextArrow: ".ba-slider__next",
  		responsive: [
  			{
  				breakpoint: 1024,
  				settings: {
  					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 100,
		  			infinite:true
  				}
  			}
  		] // на экране шириной менее 1024
	});

	$('.slide-btn').on('mouseleave', function(){
		$(this).blur();
	}); // убираем фокус, если мышку увели и не нажали в другом месте
});
