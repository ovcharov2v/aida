import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.contacts-intro')
	if (!target) return

	gsap.fromTo('.contacts-intro__title-block',
		{
			y: 200,
			opacity: 0,
			'webkitFilter': 'blur(10px)',
			'filter': 'blur(10px)',
		},
		{
			y: 0,
			opacity: 1,
			stagger: 0.2,
			'webkitFilter': 'blur(0px)',
			'filter': 'blur(0px)',
			duration: 1.5,
		}
	)
})
