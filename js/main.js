$(document).ready(function(){
	$('.ba-slider').slick({
	 	slidesToShow: 3,
		slidesToScroll: 3,
		speed: 100,
  		infinite:true,
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
  		]
	});
});
