import initCartCalc from "./cartCalc";

function initQuality() {
	const quantityContainers = document.querySelectorAll(".quantity");

	quantityContainers.forEach((container) => {
		const minusBtn = container.querySelector(".quantity__btn:first-child");
		const plusBtn = container.querySelector(".quantity__btn:last-child");
		const quantityInput = container.querySelector(".quantity__num");

		minusBtn.addEventListener("click", () => {
			let currentValue = parseInt(quantityInput.value);
			if (currentValue > 1) {
				quantityInput.value = currentValue - 1;
			}

			initCartCalc();
		});

		plusBtn.addEventListener("click", () => {
			let currentValue = parseInt(quantityInput.value);
			quantityInput.value = currentValue + 1;

			initCartCalc();
		});

		quantityInput.addEventListener("change", () => {

			let value = quantityInput.value;
			value = parseInt(value.replace(/[^0-9]/g, ''));
			quantityInput.value = value;
			const min = quantityInput.min || 0;
			const max = quantityInput.max || 99;

			console.log(value);


			if (value < min) quantityInput.value = min;
			if (value > max) quantityInput.value = max;
			if (!value) quantityInput.value = 1;

			initCartCalc();
		});

		/* quantityInput.addEventListener("input", () => {
			const value = parseInt(quantityInput.value);
			quantityInput.value = value.replace(/[^0-9]/g, '');
		}); */
	});
}

export default initQuality;
