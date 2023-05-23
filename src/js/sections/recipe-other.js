import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.recipe-other')
	if (!target) return

	gsap.to('.recipe-other__text', {
		opacity: 1,
		y: 0,
		scrollTrigger: {
			trigger: '.recipe-other__text'
		}
	})

})

