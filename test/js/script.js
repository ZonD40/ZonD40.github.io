const button = document.querySelector('button');


button.addEventListener('click', ()  => {
	const ul = document.querySelector('ul');
	ul.innerHTML = '';

	const inputs = document.querySelectorAll('input');

	let [k1, k2] = Array.from(inputs).map(item => +item.value).sort((a, b) => a - b);

	if (!k1 && k1 != 0 || !k2) {
		alert('Введены не все даныные!');
		return;
	}

	if (k1 < 0 || k2 < 0) {
		alert('Введите положительные значения');
		return;
	}

	for (let i = k1; i <= k2; i++) {
		const li = document.createElement('li');
		if (isPrime(i, Math.sqrt(k2)))	{
			li.textContent = i;
			ul.append(li);
		}
		console.log(i);
	}
	ul.append('Леонтьев А.В. ПМИ-20');
});

function isPrime(x, sqrt) {
	if (x === 2 || x === 1) return true;
	for (let i = 2; i <= sqrt; i++) {
		if (x % i === 0 && x !== i) return false;
	}

	return true;
}