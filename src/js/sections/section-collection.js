import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.section-collection')
	if(!target) return

	gsap.fromTo('.section-collection__title',
		{
			y: 50,
			opacity: 0
		},
		{
			scrollTrigger: {
				trigger: '.section-collection__title',
				// markers: true,
				end: 'center center',
				scrub: 1.5,
				toggleActions: "restart none none none"
			},
			y: 0,
			opacity: 1
		}
	)

	gsap.fromTo('.section-collection__text',
		{
			y: 75,
			opacity: 0
		},
		{
			scrollTrigger: {
				trigger: '.section-collection__text',
				// markers: true,
				end: 'center center',
				scrub: 1.5,
				toggleActions: "restart none none none"
			},
			y: 0,
			opacity: 1
		}
	)

	gsap.fromTo('.section-collection__link',
		{
			y: 100,
			opacity: 0
		},
		{
			scrollTrigger: {
				trigger: '.section-collection__link',
				// markers: true,
				end: 'center center',
				scrub: 1.5,
				toggleActions: "restart none none none"
			},
			y: 0,
			opacity: 1
		}
	)

	gsap.fromTo('.section-collection__gallery-grid',
		{
			opacity: 0,
		},
		{
			scrollTrigger: {
				trigger: '.section-collection__gallery-grid',
				scrub: 1.5,
				// markers: true,
				end: '400px center',
				toggleActions: "restart none none none"
			},
			opacity: 1,
		}
	)
	gsap.fromTo('.section-collection__gallery-grid',
		{
			y: 200,
		},
		{
			scrollTrigger: {
				trigger: '.section-collection__gallery-grid',
				scrub: 1.5,
				// markers: true,
				toggleActions: "restart none none none"
			},
			y: 0,
		}
	)
	gsap.fromTo(['.section-collection__gallery-col--n2'],
		{
			y: 200,
		},
		{
			scrollTrigger: {
				trigger: '.section-collection__gallery-col--n2',
				// markers: true,
				start: 'top bottom',
				end: '70% top',
				scrub: 1.5,
				toggleActions: "restart none none none"
			},
			y: -600,
		}
	)
})
