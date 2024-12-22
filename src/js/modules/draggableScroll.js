function initDraggableScroll() {
	const draggableScroll = document.querySelector(".draggable-scroll");
	const scrollContent = document.querySelector(".scroll-content");

	let isDown = false;
	let startX;
	let scrollLeft;

	draggableScroll.addEventListener("mousedown", (e) => {
		isDown = true;
		draggableScroll.classList.add("active");
		startX = e.pageX - draggableScroll.offsetLeft;
		scrollLeft = draggableScroll.scrollLeft;
	});

	draggableScroll.addEventListener("mouseleave", () => {
		isDown = false;
		draggableScroll.classList.remove("active");
	});

	draggableScroll.addEventListener("mouseup", () => {
		isDown = false;
		draggableScroll.classList.remove("active");
	});

	draggableScroll.addEventListener("mousemove", (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - draggableScroll.offsetLeft;
		const walk = (x - startX ) * 2;
		draggableScroll.scrollLeft = scrollLeft - walk;
	});
}

export default initDraggableScroll;
