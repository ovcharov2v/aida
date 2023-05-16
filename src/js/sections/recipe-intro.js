import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.recipe-intro')
	if (!target) return

	gsap.timeline()
		.to('.recipe-intro', {
			opacity: 1,
			scrollTrigger: {
				trigger: '.recipe-intro'
			}
		})
		.to(['.recipe-intro__back', '.recipe-intro__title', '.recipe-intro__features', '.recipe-intro__text', '.recipe-intro__bottom'], {
			opacity: 1,
			x: 0,
			delay: .5,
			duration: .7,
			stagger: .3
		})
})

