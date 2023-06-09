import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.section-market-preview')
	if(!target) return

	gsap.fromTo('.section-market-preview__title',
		{
			y: 50,
			opacity: 0
		},
		{
			scrollTrigger: {
				trigger: '.section-market-preview__title',
				// markers: true,
				end: 'center center',
				scrub: 1.5,
				toggleActions: "restart none none none"
			},
			y: 0,
			opacity: 1
		}
	)

	gsap.fromTo('.section-market-preview__text',
		{
			y: 75,
			opacity: 0
		},
		{
			scrollTrigger: {
				trigger: '.section-market-preview__text',
				// markers: true,
				end: 'center center',
				scrub: 1.5,
				toggleActions: "restart none none none"
			},
			y: 0,
			opacity: 1
		}
	)

	const linkList = document.querySelectorAll('.section-market-preview__link')
	linkList.forEach((link) => {
		gsap.fromTo(link,
			{
				y: 100,
				opacity: 0
			},
			{
				scrollTrigger: {
					trigger: link,
					// markers: true,
					end: 'center center',
					scrub: 1.5,
					toggleActions: "restart none none none"
				},
				y: 0,
				opacity: 1
			}
		)
	})

	const recipes = gsap.utils.toArray('.section-market-preview__market-link')

	recipes.forEach((recipe) => {
		gsap.fromTo(recipe,
			{
				opacity: 0,
				y: 50
			},
			{
				scrollTrigger: {
					trigger: recipe,
					scrub: 2,
					// markers: true,
					start: "top bottom",
					end: "top 70%",
					toggleActions: "restart none none none"
				},
				opacity: 1,
				y: 0
			}
		)
	})
})
