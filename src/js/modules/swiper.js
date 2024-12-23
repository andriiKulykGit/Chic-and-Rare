import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import gsap from "gsap";

export function initHeroSwiper() {
	const heroSwiper = document.querySelector(".hero-swiper");
	const swiper = new Swiper(heroSwiper, {
		modules: [Navigation, Pagination, Autoplay],
		centeredSlides: true,
		loop: true,
		grabCursor: true,
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
				const progressLine = heroSwiper.querySelector(
					".swiper-pagination-bullet-active",
				);
				progressLine.style.setProperty("--progress", 1 - progress);
			},
		},
	});
}

export function initCatalogSlider() {
	const swiper = new Swiper(".catalog-swiper", {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 24,
		grabCursor: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
			1370: {
				slidesPerView: 5,
			},
		},
	});

	const slides = document.querySelectorAll(".catalog-swiper .swiper-slide:not(.sizes__item)");

	const animateSlide = (slide) => {
		gsap.fromTo(
			slide,
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.5 },
		);
	};

	const observerOptions = {
		root: null, // Use the viewport as the root
		threshold: 0.1, // Trigger when 10% of the slide is visible
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				animateSlide(entry.target);
				// observer.unobserve(entry.target); // Stop observing after animation
			}
		});
	}, observerOptions);

	slides.forEach((slide) => {
		observer.observe(slide);
	});

	const swiper2 = new Swiper(".draggable-scroll", {
		slidesPerView: 4.5,
		spaceBetween: 4,
		freeMode: true,
		grabCursor: true,
		nested: true
	});
}

export default { initHeroSwiper, initCatalogSlider };
