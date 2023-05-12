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
	gsap.fromTo('.section-image-back-anim .section-image-back-anim__box',
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
