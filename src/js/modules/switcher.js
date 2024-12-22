import { gsap } from "gsap";

let isAnimating = false;

function initSwitcher() {
	const switchers = document.querySelectorAll(".switcher");

	switchers.forEach((switcher) => {
		const btns = switcher.querySelectorAll(".switcher__btn");

		const activateButton = (activeBtn) => {
			if (isAnimating) return;

			btns.forEach((btn) => {
				btn.classList.remove("switcher__btn_active");
			});
			activeBtn.classList.add("switcher__btn_active");
			resizeOverlay(switcher);

			const area = switcher.dataset.area;
			if (area === "categories") {
				changeCategory();
			}
		};

		btns.forEach((btn) => {
			btn.addEventListener("click", () => {
				if (!btn.classList.contains("switcher__btn_active")) {
					activateButton(btn);
				}
			});
		});

		resizeOverlay(switcher);
	});
}

function resizeOverlay(switcher) {
	const overlay = switcher.querySelectorAll(".switcher__overlay");
	const btn = switcher.querySelector(".switcher__btn_active");

	if (btn) {
		const btnWidth = btn.offsetWidth;
		const btnLeft = btn.offsetLeft;

		overlay.forEach((overlay) => {
			overlay.style.left = `${btnLeft}px`;
			overlay.style.width = `${btnWidth}px`;
		});
	}
}

function changeCategory() {
	if (isAnimating) return;

	isAnimating = true;

	const activeElm = document.querySelector(".categories__wrapper_active");
	const targetElm = document.querySelector(".categories__wrapper_hidden");

	const cells = activeElm.querySelectorAll(".categories__cell");
	cells.forEach((cell) => {
		gsap.to(cell, {
			opacity: 0,
			y: 40,
			duration: 0.2,
			ease: "power3.out",
			onComplete: () => {
				activeElm.classList.remove("categories__wrapper_active");
				activeElm.classList.add("categories__wrapper_hidden");
				targetElm.classList.remove("categories__wrapper_hidden");
				targetElm.classList.add("categories__wrapper_active");
				const targetCells = targetElm.querySelectorAll(".categories__cell");

				gsap.fromTo(targetCells, {
					opacity: 0,
					y: -40,
				}, {
					opacity: 1,
					y: 0,
					duration: 0.2,
					stagger: 0.2,
					ease: "power3.out",
					onComplete: () => {
						isAnimating = false;
					},
				});
			},
		});
	});
}

export default initSwitcher;
