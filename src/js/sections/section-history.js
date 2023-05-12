import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.section-history')
	if(!target) return

	gsap.fromTo('.section-history__title',
		{
			y: 50,
			opacity: 0
		},
		{
			scrollTrigger: {
				trigger: '.section-history__title',
				// markers: true,
				end: 'center center',
				scrub: 1.2,
				toggleActions: "restart none none none"
			},
			y: 0,
			opacity: 1
		}
	)

	gsap.fromTo('.section-history__text',
		{
			y: 75,
			opacity: 0
		},
		{
			scrollTrigger: {
				trigger: '.section-history__text',
				// markers: true,
				end: 'center center',
				scrub: 1.1,
				toggleActions: "restart none none none"
			},
			y: 0,
			opacity: 1
		}
	)

	gsap.fromTo('.section-history__link',
		{
			y: 100,
			opacity: 0
		},
		{
			scrollTrigger: {
				trigger: '.section-history__link',
				// markers: true,
				end: 'center center',
				scrub: 1.3,
				toggleActions: "restart none none none"
			},
			y: 0,
			opacity: 1
		}
	)


	gsap.fromTo('.section-history__img-box--n2',
		{
			y: 300,
			opacity: 0
		},
		{
			scrollTrigger: {
				trigger: '.section-history__gallery',
				scrub: 1.4,
				// markers: true,
				end: 'center center',
			},
			y: 0,
			opacity: 1
		}
	)

	gsap.fromTo('.section-history__img-box--n3',
		{
			y: -200,
			opacity: 0
		},
		{
			scrollTrigger: {
				trigger: '.section-history__gallery',
				scrub: 1.3,
				// markers: true,
				end: 'center center',
			},
			y: 0,
			opacity: 1
		}
	)

	gsap.fromTo('.section-history__gallery-back',
		{
			y: 100,
		},
		{
			scrollTrigger: {
				trigger: '.section-history__gallery',
				scrub: 1.2,
				// markers: true,
				end: 'center center',
			},
			y: 0,
		}
	)
})
