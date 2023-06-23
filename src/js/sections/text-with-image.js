import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.text-with-image')
	if (!target) return


	gsap.to(['.text-with-image__img', '.text-with-image__title', '.text-with-image__text', '.text-with-image__labels'], {
		scrollTrigger: {
			trigger: target
		},
		opacity: 1,
		x: 0,
		stagger: .5,
		duration: 1
	})
})

