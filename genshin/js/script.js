

window.onload = () => {
	const inputSearch = document.querySelector(".promo__search input"),
		  search = document.querySelector(".promo__search"),
		  blockMond = document.querySelector('.promo__block_mond'),
		  blockOne = document.querySelector('.promo__block_one'),
		  blockGeo = document.querySelector('.promo__block_geo');
		  
	inputSearch.addEventListener('keyup', () => {
		if (inputSearch.value) {
			search.classList.add("promo__search_active");
		} else {
			search.classList.remove("promo__search_active");
		}
	}); 

	itemAdder = function(blockName, number = 1) {
		for (let i = 0; i <= number; i++) {
			blockName.innerHTML = blockName.innerHTML + '<div class="promo__item"> <div class="promo__item-header">Барбара</div> <div class="promo__item-icon"> <img src="./img/char/11.png" alt="char"> </div> </div>';
		}
	}

	itemAdder(blockMond, 10);
	itemAdder(blockOne, 7);
	itemAdder(blockGeo, 4);


	const tabs = document.querySelectorAll(".promo__tab"),
		  wrappers = document.querySelectorAll(".promo__wrapper");

	tabs.forEach((e, i) => {
		e.addEventListener('click', () => {
			tabs.forEach((i => {
				i.classList.remove('promo__tab_active');
			}))
			e.classList.add('promo__tab_active');

			wrappers.forEach((e) => {
				e.classList.remove('promo__wrapper_active');
			})
			wrappers[i].classList.add('promo__wrapper_active');
		})

	});


}