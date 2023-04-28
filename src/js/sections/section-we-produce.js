import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
			scrub: true,
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
		scrub: true,
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
			scrub: true,
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
			scrub: true,
		},
	}
)
gsap.fromTo('.section-we-produce__img--n2',
	{
		opacity: 0,
	},
	{
		opacity: 1,
		scrollTrigger: {
			trigger: '.section-we-produce__img--n2',
			// markers: true,
			end: 'bottom 60%',
			scrub: true,
		},
	}
)


