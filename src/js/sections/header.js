import gsap from "gsap"

function headerWatcher() {
	const header = document.querySelector('.header');
	const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

	if ((window.scrollY > 0.1) && (window.scrollY < document.body.scrollHeight - windowHeight - 2)) {
		header.classList.add('header--white');
	} else {
		header.classList.remove('header--white');
	}
	requestAnimationFrame(headerWatcher)
}
headerWatcher();

document.addEventListener('loader-animation-complete', () => {
	gsap.timeline({
		onComplete: () => {
			const evt = new Event('header-complete', {bubbles: true})
			document.dispatchEvent(evt)
		}
	})
		.to('.header__logo-link', {y: 0, opacity: 1, duration: 1})
		.to(['.header__nav', '.header__lang-list', '.header__button'], {y: 0, opacity: 1, duration: 1})
})
