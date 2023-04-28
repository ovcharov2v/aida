import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.fromTo('.section-image-back-anim .section-image-back-anim__box',
	{
		width: 0,
		height: 0,
		marginTop: -350,
	},
	{
		scrollTrigger: {
			trigger: '.section-image-back-anim .section-image-back-anim__box',
			// markers: true,
			scrub: 2,
			start: 'top 40%',
		},
		width: '100%',
		height: '100%',
		marginTop: 0,
	}
)
