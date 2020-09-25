$(function () {

	$(".rate-star").rateYo({
		rating: 5,
		starWidth: "12px",
		readOnly: true
	});

	$('.slider__body').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		arrows: false
	});

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		grid: true,
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		prefix: "$"
	});

	$('.icon-th-list').on('click', function () {
		$('.products__item').addClass('list')
		$('.icon-th-list').addClass('active')
		$('.icon-th-large').removeClass('active')
	})
	$('.icon-th-large').on('click', function () {
		$('.products__item').removeClass('list')
		$('.icon-th-list').removeClass('active')
		$('.icon-th-large').addClass('active')
	})
	$('.header__burger-list').on('click', function () {
		$('.header__burger-body').toggleClass('active')
		$('.header__burger-list').toggleClass('active')
		$('.header__menu').toggleClass('active')
		$('.header__inner').toggleClass('active')
	})

	var mixer = mixitup('.products__inner-body');


})


