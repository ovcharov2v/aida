import gsap from "gsap"

function headerWatcher() {
	const header = document.querySelector('.header');
	const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

	if (window.scrollY < 0.1) {
		header.classList.add('header--top')
		header.classList.remove('header--middle')
	} else if (window.scrollY > document.body.scrollHeight - windowHeight - 2) {
		header.classList.add('header--bottom')
		header.classList.remove('header--middle')
	} else {
		header.classList.remove('header--top', 'header--bottom')
		header.classList.add('header--middle')
	}
	requestAnimationFrame(headerWatcher)
}

headerWatcher();

document.addEventListener('loader-animation-complete', () => {
	const mm = gsap.matchMedia()

	// Desktop
	mm.add('(min-width: 1200px)', () => {
		gsap.timeline({
			onComplete: () => {
				const evt = new Event('header-complete', {bubbles: true})
				document.dispatchEvent(evt)
			}
		})
			.to('.header__logo-link', {y: 0, opacity: 1, duration: 1})
			.to(['.header__nav', '.header__lang-list', '.header__button'], {y: 0, opacity: 1, duration: 1})
	})
	// Tablet-mobile
	mm.add('(max-width: 1199px)', () => {
		gsap.timeline({
			onComplete: () => {
				const evt = new Event('header-complete', {bubbles: true})
				document.dispatchEvent(evt)
			}
		})
			.to('.header__logo-link', {y: 0, opacity: 1, duration: 1})
			.to('.header__burger', {y: 0, opacity: 1, duration: 1})

		// Mobile menu
		const burger = document.querySelector('.header__burger')
		const close = document.querySelector('.header__close')

		const anim = gsap.timeline({paused: true})
			.fromTo('.header__nav-box',
				{
					boxShadow: "0 0 0 200vw rgba(6, 6, 6, 0)"
				},
				{
					opacity:1,
					boxShadow: "0 0 0 200vw rgba(6, 6, 6, 0.56)",
					duration: .7
				}
			)
			.to('.header__nav-box',
				{
					x: 0,
					duration: .7
				}
			)
		burger.addEventListener('click', () => {
			document.body.classList.add('overflow-hidden')
			anim.play()
		})

		close.addEventListener('click', () => {
			document.body.classList.remove('overflow-hidden')
			anim.reverse()
		})
	})
})
