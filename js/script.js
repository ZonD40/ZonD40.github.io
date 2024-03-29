
const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		menuOverlay = document.querySelector('.menu__overlay'),
		menuLink = document.querySelectorAll('.menu__link'),
		closeElem = document.querySelector('.menu__close');
		

const menuClose = function() {
	menu.classList.remove('menu__active');
}

hamburger.addEventListener('click', () => {
	menu.classList.add('menu__active');
});
closeElem.addEventListener('click', menuClose);
menuOverlay.addEventListener('click', menuClose);
menuLink.forEach((i) => {
	i.addEventListener('click', menuClose);
})

const formName = document.getElementById('name'),
		formEmail = document.getElementById('email'),
		formPolicy = document.getElementById('policy'),
		formLine = document.querySelector('.error__line'),
		formBtn = document.querySelector('.contacts__triggers .btn'),
		formBanner = document.querySelector('.contacts__form-submit'),
		formWrapper = document.querySelector('.contacts__form__wrapper'),
		form = document.getElementById('form');

const inputValidate = function(input, placeholderText = '', emailText = '') {
	const inputDefault = (e, input, text) => {
		e.preventDefault();
		input.classList.add('error');
		input.placeholder = (text);
		if (!input.value.trim()) {
			input.value = '';
		}
	}

	input.addEventListener('change', () => {
		if (input.value != '') {
			input.classList.remove('error');
			input.placeholder = ('');
		}
		if (input === formPolicy) {
			formLine.classList.remove('error__line_active');
		}
	})

	formBtn.addEventListener('click', (e) => {
		const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (input.value.trim() === '') {
			inputDefault(e, input, placeholderText)
		} else 
		if (emailText && !(input.value.match(validRegex))) {
			inputDefault(e, input, emailText);
			const label = document.querySelector('.contacts__error-label');
			label.classList.add('contacts__error-label_active');
			label.addEventListener('animationend', () => {
				label.classList.remove('contacts__error-label_active');
			})
		} else
		if (!placeholderText && !formPolicy.checked) {
			e.preventDefault();
			formLine.classList.add('error__line_active');
			formLine.addEventListener('animationend', () => {
				formLine.classList.remove('error__line_active');
			})
		} else 
		if (formName.value.trim() && formEmail.value.trim() && formPolicy.checked) {
			setTimeout(() => {
				form.reset();
				formBanner.classList.add('contacts__form-submit_active');
				formWrapper.classList.add('contacts__form__wrapper_dark');
				formBanner.addEventListener('animationend', () => {
					formBanner.classList.remove('contacts__form-submit_active');
				})
				formWrapper.addEventListener('animationend', () => {
					formWrapper.classList.remove('contacts__form__wrapper_dark');
				})
			}, 10)
		}
	});
}

inputValidate(formName, 'Введите ваше имя!');
inputValidate(formPolicy);
inputValidate(formEmail, 'Введите вашу почту!', 'Некорректый формат почты!');



	