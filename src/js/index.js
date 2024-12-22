import initMarquee from "./modules/marquee";
import initHeroSwiper from "./modules/swiper";
import initSwitcher from "./modules/switcher";
import initHoverBtns from "./modules/btn";
import initFaqs from "./modules/faqs";
import initCategoriesAnim from "./modules/categories";
import initDraggableScroll from "./modules/draggableScroll";
import initQuality from "./modules/quality";
import initCartCalc from "./modules/cartCalc";
import initDeleteProductCard from "./modules/product-card";
import initPopUps from "./modules/pop-up";
import "./modules/lazyload";

document.addEventListener("DOMContentLoaded", function() {
	initMarquee();
	initHeroSwiper();
	initSwitcher();
	initHoverBtns();
	initFaqs();
	initCategoriesAnim();
	initDraggableScroll();
	initQuality();
	initCartCalc();
	initDeleteProductCard();
	initPopUps();
});
