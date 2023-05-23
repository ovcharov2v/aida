import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.history-intro')
	if (!target) return

	const mm = gsap.matchMedia()
	// Desktop
	mm.add('(min-width: 1200px)', () => {
		gsap.timeline()
			.to('.history-intro__title-block',
				{
					y: 0,
					opacity: 1,
					stagger: 0.5,
					'webkitFilter': 'blur(0px)',
					'filter': 'blur(0px)',
					duration: 2,
				})
			.to('.history-intro__col-img-back',
				{
					opacity: 1,
					duration: 1
				},
				"-=1.5")
			.to('.history-intro__img--n1',
				{
					opacity: 1,
					y: 0,
					duration: 1
				},
				"-=.7")
			.to('.history-intro__img--n2',
				{
					opacity: 1,
					y: 130,
					duration: 1
				},
				"-=.5")
	})
	// Tablet-mobile
	mm.add('(max-width: 1199px)', () => {
		gsap.timeline()
			.to('.history-intro__col-img-back',
				{
					opacity: 1,
					duration: 1
				},
				"-=1.5")
			.to('.history-intro__img--n1',
				{
					opacity: 1,
					y: 0,
					duration: 1
				},
				"-=.7")
			.to('.history-intro__title-block',
				{
					y: 0,
					opacity: 1,
					stagger: 0.5,
					'webkitFilter': 'blur(0px)',
					'filter': 'blur(0px)',
					duration: 2,
				})
	})
})

