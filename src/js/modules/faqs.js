function initFaqs() {
	const openAllbtn = document.querySelector(".-faqs-open-all");
	const closeAllbtn = document.querySelector(".-faqs-close-all");

	const setFaqsOpenState = (state) => {
		const targetSelector =
			state === "open"
				? openAllbtn.dataset.target
				: closeAllbtn.dataset.target;
		const faqs = document.querySelector(targetSelector).children;

		for (let i = 0; i < faqs.length; i++) {
			const faqDetails = faqs[i].querySelector(".accordion__details");
			if (state === "open") {
				faqDetails.setAttribute("open", "");
			} else {
				faqDetails.removeAttribute("open");
			}
		}
	};

	openAllbtn.addEventListener("click", () => setFaqsOpenState("open"));
	closeAllbtn.addEventListener("click", () => setFaqsOpenState("close"));
}

export default initFaqs;
