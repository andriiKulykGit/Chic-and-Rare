function initCartCalc() {
	const count = document.querySelectorAll(".quantity__num");

	let sum = 0;

	count.forEach((item) => {
		const countOfProduct = item.value;
		const price = item.dataset.price;

		sum += countOfProduct * price;
	});

	document.querySelector(".cart__price").textContent = sum;
}

export default initCartCalc;
