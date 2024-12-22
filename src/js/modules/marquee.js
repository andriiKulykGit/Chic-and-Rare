function initMarquee() {
	addEventListener("resize", updateMarquee);
	updateMarquee();
}

function updateMarquee() {
	const marquee = document.querySelector(".marquee");
	const marqueeWrapper = document.querySelector(".marquee__wrapper");
	const separator = marquee.getAttribute("data-marquee-separator");
	const text = marquee.getAttribute("data-marquee-text");
	console.log(text);

	const viewportHeight = window.innerHeight;
	const textHeight = parseFloat(getComputedStyle(marqueeWrapper).lineHeight);
	const repetitions = Math.ceil(viewportHeight / textHeight);

	marqueeWrapper.textContent = "";

	for (let i = 0; i < repetitions; i++) {
		marqueeWrapper.textContent += `${text} ${separator} `;
	}
}

export default initMarquee;
