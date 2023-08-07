import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.section-hero-main')
	if(!target) return

	gsap.fromTo('.section-hero-main__next-btn', {
		y: -7
	}, {
		y: 7,
		yoyo: true,
		repeat: -1,
		duration: .7,
	})

	document.addEventListener('loader-animation-complete', () => {
		gsap.timeline({})
			.to('.section-hero-main__title-block',
				{
					y: 0,
					opacity: 1,
					stagger: 0.5,
					'webkitFilter': 'blur(0px)',
					'filter': 'blur(0px)',
					duration: 2,
				}
			)
			.to('.section-hero-main__next-btn', {
				opacity: 1,
				duration: .7,
			})
	})
})
