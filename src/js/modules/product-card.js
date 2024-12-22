import gsap from "gsap";

function initDeleteProductCard() {
	const cards = document.querySelectorAll(".cart__item");

	cards.forEach((card) => {
		const deleteBtn = card.querySelector(".product-card__delete");
		const cardHeight = card.offsetHeight + 24;
		deleteBtn.addEventListener("click", () => {
			gsap.to(card, {
				opacity: 0,
				x: 80,
				duration: 0.2,
				onComplete: () => {
					let nextElements = Array.from(
						card.parentNode.children,
					).slice(
						Array.from(card.parentNode.children).indexOf(card) + 1,
					);
					gsap.to(nextElements, {
						y: -cardHeight,
						duration: 0.2,
						onComplete: () => {
							gsap.set(nextElements, {
								y: 0,
                                onComplete: () => {
                                    card.remove();
                                }
							});
						},
					});
					// card.remove();
				},
			});
		});
	});
}

export default initDeleteProductCard;
