$(document).ready(function () {
	$('.comic-slider').slick({
		centerMode: true,
		centerPadding: '10px',
		slidesToShow: 4,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
				},
			},
		],
	});
});
