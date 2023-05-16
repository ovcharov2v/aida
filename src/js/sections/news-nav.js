import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.news-nav')
	if (!target) return


	gsap.to('.news-nav__elem', {
		scrollTrigger: {
			trigger: target
		},
		opacity: 1,
		y: 0,
		stagger: .15,
		duration: 1,
		ease: 'ease-in-out'
	})
})

