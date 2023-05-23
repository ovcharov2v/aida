import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.section-we-produce')
	if (!target) return

	gsap.fromTo('.section-we-produce__title-part--n1',
		{
			y: 30,
			opacity: 0,
			'webkitFilter': 'blur(5px)',
			'filter': 'blur(5px)',
		},
		{
			y: 0,
			opacity: 1,
			'webkitFilter': 'blur(0px)',
			'filter': 'blur(0px)',
			scrollTrigger: {
				trigger: '.section-we-produce__title',
				// markers: true,
				end: 'bottom 70%',
				scrub: 1.5,
			},
		}
	)
	gsap.fromTo('.section-we-produce__title-part--n2',
		{
			y: 70,
			opacity: 0,
			'webkitFilter': 'blur(5px)',
			'filter': 'blur(5px)',
		},
		{
			y: 0,
			opacity: 1,
			'webkitFilter': 'blur(0px)',
			'filter': 'blur(0px)',
			scrollTrigger: {
				trigger: '.section-we-produce__title',
				// markers: true,
				end: 'bottom 70%',
				scrub: 1.5,
			},
		}
	)
	gsap.fromTo('.section-we-produce__text',
		{
			y: 70,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: '.section-we-produce__text',
				// markers: true,
				end: 'bottom 70%',
				scrub: 1.5,
			},
		}
	)

	gsap.fromTo('.section-we-produce__link',
		{
			y: 100,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			scrollTrigger: {
				trigger: '.section-we-produce__link',
				// markers: true,
				end: 'bottom 70%',
				scrub: 1.5,
			},
		}
	)
	gsap.fromTo('.section-we-produce__img-box',
		{
			opacity: 0,
		},
		{
			opacity: 1,
			scrollTrigger: {
				trigger: '.section-we-produce__img-box',
				// markers: true,
				end: 'bottom 60%',
				scrub: 1.5,
			},
		}
	)

	const mm = gsap.matchMedia()
	// Tablet-mobile
	mm.add('(max-width: 1199px)', () => {
		gsap.fromTo('.section-we-produce__video-box--mobile',
			{
				opacity: 0,
				y: 100,
			},
			{
				opacity: 1,
				y: 0,
				scrollTrigger: {
					trigger: '.section-we-produce__video-box--mobile',
					// markers: true,
					scrub: 1.5,
				},
			}
		)
	})
})
