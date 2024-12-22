export function blockScroll() {
	document.body.classList.add('no-scroll');
	document.querySelector(".wrapper").setAttribute("inert", "");
}

export function allowScroll() {
	document.body.classList.remove('no-scroll');
	document.querySelector(".wrapper").removeAttribute("inert");
}

export default { blockScroll, allowScroll };
