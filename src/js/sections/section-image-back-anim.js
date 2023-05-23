import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.section-image-back-anim')
	if(!target) return

	gsap.fromTo('.section-image-back-anim .section-image-back-anim__box',
		{
			width: 0,
			height: 0,
		},
		{
			scrollTrigger: {
				trigger: '.section-image-back-anim .section-image-back-anim__box',
				//markers: true,
				scrub: true,
				start: 'top 40%',
				end: "bottom 300px",
			},
			width: '100%',
			height: '100%',
		}
	)
	const mm = gsap.matchMedia()
	// Desktop
	mm.add('(min-width: 1200px)', () => {gsap.fromTo('.section-image-back-anim .section-image-back-anim__box',
		{
			y: -650,
		},
		{
			scrollTrigger: {
				trigger: '.section-image-back-anim .section-image-back-anim__box',
				//markers: true,
				scrub: true,
				start: '200px 40%',
				end: "+=800px top"
			},
			y: 200,
		}
	)
	})
	// Tablet-mobile
	mm.add('(max-width: 1199px)', () => {gsap.fromTo('.section-image-back-anim .section-image-back-anim__box',
		{
			y: -200,
		},
		{
			scrollTrigger: {
				trigger: '.section-image-back-anim .section-image-back-anim__box',
				//markers: true,
				scrub: true,
				start: '200px 40%',
				end: "+=800px top"
			},
			y: 200,
		}
	)
	})

	gsap.fromTo('.section-image-back-anim .section-image-back-anim__img',
		{
			xPercent: -.6,
			scale: .4,
			height: "540%"
		},
		{
			scrollTrigger: {
				trigger: '.section-image-back-anim .section-image-back-anim__img',
				// markers: true,
				scrub: true,
				start: 'top 40%',
				end: "bottom -=300px",
			},
			xPercent: 0,
			scale: 1,
			height: "100%"
		}
	)
})
