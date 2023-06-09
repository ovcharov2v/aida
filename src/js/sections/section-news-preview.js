import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.section-news-preview')
	if(!target) return

	gsap.fromTo('.section-news-preview__title',
		{
			y: 50,
			opacity: 0
		},
		{
			scrollTrigger: {
				trigger: '.section-news-preview__title',
				// markers: true,
				end: 'center center',
				scrub: 1.5,
				toggleActions: "restart none none none"
			},
			y: 0,
			opacity: 1
		}
	)

	gsap.fromTo('.section-news-preview__link',
		{
			y: 100,
			opacity: 0
		},
		{
			scrollTrigger: {
				trigger: '.section-news-preview__link',
				// markers: true,
				end: 'center center',
				scrub: 1.5,
				toggleActions: "restart none none none"
			},
			y: 0,
			opacity: 1
		}
	)

	const newsList = gsap.utils.toArray('.section-news-preview__news')

	newsList.forEach((news) => {
		gsap.fromTo(news,
			{
				opacity: 0,
			},
			{
				scrollTrigger: {
					trigger: news,
					scrub: 2,
					// markers: true,
					start: "top bottom",
					end: "top 70%",
					toggleActions: "restart none none none"
				},
				opacity: 1,
			}
		)
	})

	const mm = gsap.matchMedia()
	// Desktop
	mm.add('(min-width: 1200px)', () => {
		gsap.fromTo(['.section-news-preview__news-col--n2'],
			{
				y: 200,
			},
			{
				scrollTrigger: {
					trigger: '.section-news-preview__news-col--n2',
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
	// Tablet-mobile
	mm.add('(max-width: 1199px)', () => {
		gsap.fromTo(['.section-news-preview__news-col--n2'],
			{
				y: 30,
			},
			{
				scrollTrigger: {
					trigger: '.section-news-preview__news-col--n2',
					// markers: true,
					start: 'top bottom',
					end: '70% top',
					scrub: 1.5,
					toggleActions: "restart none none none"
				},
				y: -30,
			}
		)
	})
})
