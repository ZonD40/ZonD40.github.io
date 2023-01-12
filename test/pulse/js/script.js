const slider = tns({
	container: '.carusel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: true,
	navPosition: 'bottom',
	speed: 1200
});

$(window).ready(function() {


	document.querySelector('.prev').addEventListener('click', function () {
		slider.goTo('prev');
	});
	document.querySelector('.next').addEventListener('click', function () {
		slider.goTo('next');
	});
	
	
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
		.eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		})
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');
	
	
	const showModal = function(btn, modal) {
		$(btn).on('click', () => {
			$(`.overlay, ${modal}`).fadeIn();
		});
		$('.modal__close, .modal__close-area').on('click', () => {
			$(`.overlay, ${modal}`).fadeOut();
		});
	};
	
	showModal('[data-modal="consultation"]', '#consultation');
	
	$('.button_mini').each(function(i) {
		showModal('.button_mini', '#order');
		$(this).on('click', () => {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
		})
	});
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	})

	const formValidate = function(formName) {
		$(formName).validate({
			rules:{
				name: "required",
				phone: {
					required: true,
					maxlength: 11,
					minlength: 11
				},
				email: {
					required: true,
					email: true
			}
		},
		messages: {
			name: "Пожалуйста, введите свое имя",
			phone: "Пожалуйста, введите свое номер телефона",
			email: {
				required: "Пожалуйста, введите свою почту",
				email: "Неправильно введет адресс почты"
			}
		}
		});
	}
	
	formValidate('#consultation-form');
	formValidate('#consultation form');
	formValidate('#order form');

	


})