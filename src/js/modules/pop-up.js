import gsap from "gsap";
import { blockScroll, allowScroll } from "./scroll";

function initPopUps() {
	/* sideMenu();
	pickSize(); */

	const IDs = ["cart", "pick-size"];

	IDs.forEach((id) => {
		const popUp = document.querySelector(`[data-popup="${id}"]`);
		const closeBtns = popUp.querySelectorAll(`[data-popup-close="${id}"]`);
		const openBtns = document.querySelectorAll(`[data-popup-open="${id}"]`);

		console.log(openBtns);


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

function sideMenu() {
	const sideMenu = document.querySelector(".pop-up_side-menu");
	const closeBtns = sideMenu.querySelectorAll('[data-popup-close="cart"]');
	const openBtns = document.querySelectorAll('[data-popup-taget="cart"]');

	openBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			blockScroll();
			showPopUp(sideMenu);
			gsap.fromTo(
				".cart",
				{
					x: "100%",
					opacity: 0,
				},
				{
					x: 0,
					opacity: 1,
				},
			);
		});
	});

	closeBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			hidePopUp(sideMenu);
			gsap.to(".cart", {
				borderRadius: "50% 0 0 50%",
				x: "100%",
				opacity: 0,
			});
		});
	});
}

function pickSize() {
	const pickSize = document.querySelector("[data-popup='pick-size']");
	const closeBtns = pickSize.querySelectorAll(
		'[data-popup-close="pick-size"]',
	);
	const openBtns = document.querySelectorAll('[data-popup-open="pick-size"]');

	openBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			blockScroll();
			showPopUp(pickSize);
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
		});
	});

	closeBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			hidePopUp(pickSize);
			gsap.to(".pick-size", {
				y: "100%",
				opacity: 0,
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
