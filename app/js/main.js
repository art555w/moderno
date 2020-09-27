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

	$('.details__tabs .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.details__tabs').find('.tab-item').removeClass('active-tab').hide();
		$('.details__tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});

	var mixer = mixitup('.products__inner-body');


})


