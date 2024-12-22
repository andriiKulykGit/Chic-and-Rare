import gsap from "gsap";

function initCategoriesAnim() {
	const cells = document.querySelectorAll(".categories__cell");
	cells.forEach((cell) => {
		const title = cell.querySelector(".categories__title");

        let titleHeight, titleWidth;

		cell.addEventListener("mouseenter", () => {
            titleHeight = title.offsetHeight;
            titleWidth = title.offsetWidth;
			if(!cell.hasAttribute('data-width')) {
				cell.setAttribute('data-width', titleWidth);
			}
			if(!cell.hasAttribute('data-height')) {
				cell.setAttribute('data-height', titleHeight);
			}

			gsap.fromTo(
				title,
				{
					borderRadius: "100%",
				},
				{
					width: "calc(100% + 24px)",
					height: "100%",
					borderRadius: "16px",
					ease: "power2.out",
					bottom: 0,
				},
			);
		});
		cell.addEventListener("mouseleave", () => {

			gsap.to(title, {
				width: cell.getAttribute('data-width'),
				height: cell.getAttribute('data-height'),
				ease: "power2.out",
				borderRadius: "36px",
				bottom: 24,
			});
		});
	});
}

export default initCategoriesAnim;
