import gsap from "gsap";

function initHoverBtns() {
	const btns = document.querySelectorAll(".btn");
	btns.forEach((btn) => {
		duplicateText(btn);

		const textElms = btn.querySelectorAll(".btn__text");
		textElms.forEach((textElm) => {
			if (!textElm.classList.contains("hide")) {
				splitText(textElm);
			}
		});

		btn.addEventListener("mouseenter", () => hoverIn(btn));
		btn.addEventListener("mouseleave", () => hoverOut(btn));
	});
}

function duplicateText(elm) {
	const text = elm.querySelector(".btn__text");
	if (!text) {
		return; // Exit the function if no element is found
	}

	const clonedTextBefore = text.cloneNode(true);
	clonedTextBefore.setAttribute("aria-hidden", "true");
	clonedTextBefore.classList.add("btn__text_before");

	const clonedTextAfter = text.cloneNode(true);
	clonedTextAfter.setAttribute("aria-hidden", "true");
	clonedTextAfter.classList.add("btn__text_after");

	elm.insertBefore(clonedTextBefore, text);
	elm.appendChild(clonedTextAfter);

	text.classList.add("hide");
}

function splitText(elm) {
	elm.innerHTML = elm.innerText
		.split("")
		.map((char, i) => `<span>${char}</span>`)
		.join("");
}
function hoverIn(elm) {
	toUp(elm, ".btn__text_after");
	toUp(elm, ".btn__text_before");
}

function hoverOut(elm) {
	toBottom(elm, ".btn__text_after");
	toBottom(elm, ".btn__text_before");
}

function toUp(elm, selector) {
	const elmHeight = elm.offsetHeight;
	const spans = elm.querySelectorAll(`${selector} span`);
	gsap.to(spans, {
		y: -elmHeight,
		duration: 0.2,
		stagger: 0.04,
		ease: "power3.out",
	});
}

function toBottom(elm, selector) {
	const spans = elm.querySelectorAll(`${selector} span`);
	gsap.to(spans, {
		y: 0,
		duration: 0.2,
		stagger: 0.04,
		ease: "power3.out",
	});
}

export default initHoverBtns;
