import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.where-buy-intro')
	if(!target) return

	gsap.to(['.where-buy-intro__title', '.where-buy-intro__text-block'],
			{
				y: 0,
				opacity: 1,
				stagger: 0.5,
				'webkitFilter': 'blur(0px)',
				'filter': 'blur(0px)',
				duration: 2,
			}
		)
})
