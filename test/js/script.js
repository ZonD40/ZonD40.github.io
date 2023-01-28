

const closeElem = function(elem, elemToClose, removeClass) {
	elem.addEventListener('click', (target) => {
		elemToClose.forEach((e, i) => {
			e.classList.remove(removeClass[i])
		});
	});
};
const openElem = function(elem, elemToOpen, addClass) {
	elem.addEventListener('click', () => {
		elemToOpen.forEach((e, i) => {
			e.classList.add(addClass[i])
		});
	});
};

const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  menuClose = document.querySelector('.menu__close'),
	  menuOverlay = document.querySelector('.menu__overlay'),
	  menuItems = document.querySelectorAll('.menu__item');
	  


openElem(hamburger, [menu], ['menu_active']);


closeElem(menuClose, [menu], ['menu_active']);
closeElem(menuOverlay, [menu], ['menu_active']);
menuItems.forEach((e) => closeElem(e, [menu], ['menu_active']));

const form = document.querySelector('.form'),
	  formClose = document.querySelector('.form__close'),
	  formWrapper = document.querySelector('.form__wrapper'),
	  promoButton = document.querySelector('.promo__button');


openElem(promoButton, [form, formWrapper], ['form_active', 'form__wrapper_active']);

closeElem(formClose, [form, formWrapper], ['form_active', 'form__wrapper_active']);

const telInput = document.querySelector('.form__tel');
const regex = /^(0|[1-9]\d*)$/
telInput.addEventListener('input', () => {
	if (!regex.test(telInput.value) || telInput.value.length > 11) {
		telInput.value = telInput.value.slice(0, telInput.value.length - 1);
	}
});

function postData(form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const request = new XMLHttpRequest(),
			  formData = new FormData(form);

		request.open('POST', 'server.php');
		request.send(formData);
		request.addEventListener('load', () => {
			console.log(request.response);
			if (request.status === 200) {
				console.log(request.response);
				form.reset();
			}
		});

	})
}

postData(form);


const swiper = new Swiper('.swiper', {
	loop: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
  });