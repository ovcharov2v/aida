import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

document.addEventListener('DOMContentLoaded', () => {
	const targetsList = document.querySelectorAll('.technology-block')
	if (!targetsList.length) return

	targetsList.forEach((target) => {
		if (target.classList.contains('technology-block--type1')) {
			gsap.timeline()
				.to('.technology-block--type1 .technology-block__title-block',
					{
						y: 0,
						opacity: 1,
						stagger: 0.5,
						'webkitFilter': 'blur(0px)',
						'filter': 'blur(0px)',
						duration: 2,
					}
				)
				.to('.technology-block--type1 .technology-block__img-box--n1',
					{
						y: 77,
						opacity: 1,
						duration: 1,
					},
					"-=1.5"
				)
				.to('.technology-block--type1 .technology-block__img-box--n2',
					{
						y: -57,
						opacity: 1,
						duration: .7,
					},
					"-=.8"
				)
				.to('.technology-block--type1 .technology-block__img-box--n3',
					{
						x: 0,
						opacity: 1,
						duration: .7,
					},
					"-=.8"
				)
		}
	})
})
