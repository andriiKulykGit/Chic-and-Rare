import gsap from "gsap";
import { blockScroll, allowScroll } from "./scroll";

function initPopUps() {
	const IDs = ["cart", "pick-size"];

	IDs.forEach((id) => {
		const popUp = document.querySelector(`[data-popup="${id}"]`);
		const closeBtns = popUp.querySelectorAll(`[data-popup-close="${id}"]`);
		const openBtns = document.querySelectorAll(`[data-popup-open="${id}"]`);

		openBtns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				e.preventDefault();
				blockScroll();
				showPopUp(popUp);
				switch (id) {
					case "cart":
						gsap.fromTo(
							".cart",
							{
								borderRadius: "50% 0 0 50%",
								x: "100%",
								opacity: 0,
							},
							{
								borderRadius: 0,
								x: 0,
								opacity: 1,
							},
						);
						break;
					case "pick-size":
						gsap.fromTo(
							".pick-size",
							{
								y: "100%",
								opacity: 0,
							},
							{
								y: 0,
								opacity: 1,
							},
						);
						break;
					default:
						break;
				}
			});
		});

		closeBtns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				e.preventDefault();
				hidePopUp(popUp);
				switch (id) {
					case "cart":
						gsap.to(".cart", {
							borderRadius: "50% 0 0 50%",
							x: "100%",
							opacity: 0,
						});
						break;
					case "pick-size":
						gsap.to(".pick-size", {
							y: "100%",
							opacity: 0,
						});
						break;
					default:
						break;
				}
			});
		});
	});
}

function showPopUp(elm) {
	gsap.set(elm, {
		display: "flex",
		opacity: 1,
	});
	gsap.to(elm.querySelector(".pop-up__bg"), {
		opacity: 1,
	});
}

function hidePopUp(elm) {
	gsap.to(elm.querySelector(".pop-up__bg"), {
		opacity: 0,
	});
	gsap.to(elm, {
		opacity: 0,
		onComplete: () => {
			allowScroll();
			elm.classList.remove("pop-up_active");
			gsap.set(elm, {
				display: "none",
			});
		},
	});
}

export default initPopUps;
