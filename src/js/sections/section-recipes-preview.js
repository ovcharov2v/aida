import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.section-recipes-preview')
	if(!target) return

	const mm = gsap.matchMedia()
	// Desktop
	mm.add('(min-width: 1200px)', () => {
		gsap.fromTo('.section-recipes-preview__title',
			{
				y: 50,
				opacity: 0
			},
			{
				scrollTrigger: {
					trigger: '.section-recipes-preview__title',
					// markers: true,
					end: 'center center',
					scrub: 1.5,
					toggleActions: "restart none none none"
				},
				y: 0,
				opacity: 1
			}
		)

		gsap.fromTo('.section-recipes-preview__text',
			{
				y: 75,
				opacity: 0
			},
			{
				scrollTrigger: {
					trigger: '.section-recipes-preview__text',
					// markers: true,
					end: 'center center',
					scrub: 1.5,
					toggleActions: "restart none none none"
				},
				y: 0,
				opacity: 1
			}
		)

		const links = document.querySelectorAll('.section-recipes-preview__link')
		links.forEach((link)=>{
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

		const recipes = gsap.utils.toArray('.section-recipes-preview__recipe')

		recipes.forEach((recipe) => {
			gsap.fromTo(recipe,
				{
					opacity: 0,
				},
				{
					scrollTrigger: {
						trigger: recipe,
						scrub: 2,
						// markers: true,
						end: "top 70%",
						toggleActions: "restart none none none"
					},
					opacity: 1,
				}
			)
		})

	})
	// Tablet-mobile
	mm.add('(max-width: 1199px)', () => {
		gsap.fromTo('.section-recipes-preview__title',
			{
				y: 50,
				opacity: 0
			},
			{
				scrollTrigger: {
					trigger: '.section-recipes-preview__title',
					// markers: true,
					scrub: 1.5,
					toggleActions: "restart none none none"
				},
				y: 0,
				opacity: 1
			}
		)

		gsap.fromTo('.section-recipes-preview__text',
			{
				y: 75,
			},
			{
				scrollTrigger: {
					trigger: '.section-recipes-preview__text',
					// markers: true,
					scrub: 1.5,
					toggleActions: "restart none none none"
				},
				y: 0,
			}
		)

		const links = document.querySelectorAll('.section-recipes-preview__link')
		links.forEach((link)=>{
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

		const recipes = gsap.utils.toArray('.section-recipes-preview__recipe')

		recipes.forEach((recipe) => {
			gsap.fromTo(recipe,
				{
					opacity: 0,
				},
				{
					scrollTrigger: {
						trigger: recipe,
						scrub: 2,
						// markers: true,
						end: "top 70%",
						toggleActions: "restart none none none"
					},
					opacity: 1,
				}
			)
		})
	})



	gsap.fromTo(['.section-recipes-preview__recipe-col--n2'],
		{
			y: 200,
		},
		{
			scrollTrigger: {
				trigger: '.section-recipes-preview__recipe-col--n2',
				// markers: true,
				start: 'top bottom',
				end: '70% top',
				scrub: 1.5,
				toggleActions: "restart none none none"
			},
			y: -200,
		}
	)
})
