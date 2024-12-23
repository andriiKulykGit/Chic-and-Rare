import initMarquee from "./modules/marquee";
import { initHeroSwiper, initCatalogSlider } from "./modules/swiper";
import initSwitcher from "./modules/switcher";
import initHoverBtns from "./modules/btn";
import initFaqs from "./modules/faqs";
import initCategoriesAnim from "./modules/categories";
import initQuality from "./modules/quality";
import initCartCalc from "./modules/cartCalc";
import initDeleteProductCard from "./modules/product-card";
import initPopUps from "./modules/pop-up";
import "./modules/lazyload";

document.addEventListener("DOMContentLoaded", function() {
	initMarquee();
	initHeroSwiper();
	initCatalogSlider();
	initSwitcher();
	initHoverBtns();
	initFaqs();
	initCategoriesAnim();
	initQuality();
	initCartCalc();
	initDeleteProductCard();
	initPopUps();
	initCatalogSlider();
});
