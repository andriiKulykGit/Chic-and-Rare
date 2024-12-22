import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function initHeroSwiper() {
    const heroSwiper = document.querySelector('.hero-swiper');
	const swiper = new Swiper(heroSwiper, {
		modules: [Navigation, Pagination, Autoplay],
		direction: "horizontal",
        centeredSlides: true,
		loop: true,
		pagination: {
			el: ".hero-swiper__pagination",
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		spaceBetween: 24,
		navigation: {
			nextEl: ".hero-swiper__btn_next",
			prevEl: ".hero-swiper__btn_prev",
		},

		on: {
			autoplayTimeLeft(s, time, progress) {
                const progressLine = heroSwiper.querySelector(".swiper-pagination-bullet-active");
				progressLine.style.setProperty("--progress", 1 - progress);
			},
		},
	});
}

export default initHeroSwiper;
