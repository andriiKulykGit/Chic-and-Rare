import gsap from "gsap";
import { blockScroll, allowScroll } from "./scroll";

function initPopUps() {
	sideMenu();
}

function sideMenu() {
	const sideMenu = document.querySelector(".pop-up_side-menu");
	const sideMenuBtn = sideMenu.querySelectorAll('[data-popup-close="cart"]');
	const sideMenuOpenBtn = document.querySelector('[data-popup-taget="cart"]');

	sideMenuOpenBtn.addEventListener("click", () => {
		blockScroll();

		gsap.set(".pop-up", {
            display: "flex",
            opacity: 1
		});
        gsap.to('.pop-up__bg', {
            opacity: 1
        })
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

	});

	sideMenuBtn.forEach((btn) => {
		btn.addEventListener("click", () => {
			console.log(1);

			gsap.to(".cart", {
				borderRadius: "50% 0 0 50%",
				x: "100%",
				opacity: 0,
			});
            gsap.to('.pop-up__bg', {
                opacity: 0
            })
			gsap.to(".pop-up", {
				opacity: 0,
				onComplete: () => {
					allowScroll();
					document
						.querySelector(".pop-up")
						.classList.remove("pop-up_active");
                        gsap.set(".pop-up", {
                            display: "none"
                        })
				},
			});

		});
	});
}

export default initPopUps;
