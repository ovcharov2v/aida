import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

document.addEventListener('DOMContentLoaded', () => {
	const targetsList = document.querySelectorAll('.technology-block')
	if (!targetsList.length) return

	targetsList.forEach((target) => {
		// Type 1
		if (target.classList.contains('technology-block--type1')) {
			gsap.to('.technology-block--type1 .technology-block__title-block',
					{
						y: 0,
						opacity: 1,
						stagger: 0.5,
						'webkitFilter': 'blur(0px)',
						'filter': 'blur(0px)',
						duration: 2,
						scrollTrigger: {
							trigger: '.technology-block--type1 .technology-block__title-block'
						}
					}
				)


				gsap.to('.technology-block--type1 .technology-block__img-box--n3',
					{
						y: 0,
						opacity: 1,
						duration: .7,
						delay: 1,
						scrollTrigger: {
							trigger: '.technology-block--type1 .technology-block__img-box--n3'
						}
					})

			const mm = gsap.matchMedia()
			// Desktop
			mm.add('(min-width: 1200px)', () => {
				gsap.to(['.technology-block--type1 .technology-block__img-box--n1','.technology-block--type1 .technology-block__img-box--n2'],
					{
						y: 0,
						opacity: 1,
						duration: 1,
						stagger: 1,
						scrollTrigger: {
							trigger: '.technology-block--type1 .technology-block__img-box--n1'
						}
					}
				)
				gsap.to('.technology-block--type1 .technology-block__img--n1',
					{
						y:200,
						scrollTrigger: {
							trigger: '.technology-block--type1 .technology-block__img--n1',
							scrub: 2
						}
					})
				gsap.to('.technology-block--type1 .technology-block__img--n2',
					{
						y:-50,
						scrollTrigger: {
							trigger: '.technology-block--type1 .technology-block__img--n2',
							scrub: 2
						}
					})
				gsap.to('.technology-block--type1 .technology-block__img--n3',
					{
						x: -300,
						scrollTrigger: {
							trigger: '.technology-block--type1 .technology-block__img--n3',
							scrub: 2
						}
					})
			})
			// Tablet-mobile
			mm.add('(max-width: 1199px)', () => {
				gsap.to('.technology-block--type1 .technology-block__img-box--n1',
					{
						y:-30,
						opacity:1,
						duration: .7,
					})
				gsap.to('.technology-block--type1 .technology-block__img-box--n2',
					{
						y:30,
						opacity:1,
						duration: .7,
					})
				gsap.to('.technology-block--type1 .technology-block__img--n3',
					{
						x: -70,
						scrollTrigger: {
							trigger: '.technology-block--type1 .technology-block__img--n3',
							scrub: 2
						}
					})
			})
		}

		// Type 2
		if (target.classList.contains('technology-block--type2')) {
			const textList = document.querySelectorAll('.technology-block--type2 .technology-block__text')
			textList.forEach((text) => {
				gsap.to(text,
					{
						opacity: 1,
						y: 0,
						duration: 1.5,
						scrollTrigger: {
							trigger: text
						}
					})
			})

			gsap.to('.technology-block--type2 .technology-block__img-box--n1', {
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '.technology-block--type2 .technology-block__img-box--n1'
				}
			})
		}

		// Type 3
		if (target.classList.contains('technology-block--type3')) {
			gsap.to('.technology-block--type3 .technology-block__title',
				{
					y: 0,
					opacity: 1,
					'webkitFilter': 'blur(0px)',
					'filter': 'blur(0px)',
					duration: 2,
					scrollTrigger: {
						trigger: '.technology-block--type3 .technology-block__title'
					}
				})
			gsap.to('.technology-block--type3 .technology-block__text',
				{
					opacity: 1,
					y: 0,
					duration: 1.5,
					scrollTrigger: {
						trigger: '.technology-block--type3 .technology-block__text'
					}
				})
			gsap.to('.technology-block--type3 .technology-block__col-img', {
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '.technology-block--type3 .technology-block__col-img'
				}
			})
			gsap.fromTo('.technology-block--type3 .technology-block__img-box--n2', {y: 0}, {
				y: -193,
				scrollTrigger: {
					trigger: '.technology-block--type3 .technology-block__img-box--n2',
					scrub: 1.7,
					start: "top 110%",
					//markers: true,
				}
			})
		}

		// Type 4
		if (target.classList.contains('technology-block--type4')) {
			gsap.to('.technology-block--type4 .technology-block__img-box--n1', {
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '.technology-block--type4 .technology-block__img-box--n1'
				}
			})
			gsap.to('.technology-block--type4 .technology-block__title',
				{
					y: 0,
					opacity: 1,
					'webkitFilter': 'blur(0px)',
					'filter': 'blur(0px)',
					duration: 2,
					scrollTrigger: {
						trigger: '.technology-block--type4 .technology-block__title'
					}
				})
			gsap.to('.technology-block--type4 .technology-block__text',
				{
					opacity: 1,
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: '.technology-block--type4 .technology-block__text'
					}
				})

			gsap.to('.technology-block--type4 .technology-block__img-box--n2', {
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '.technology-block--type4 .technology-block__img-box--n2'
				}
			})


			const mm = gsap.matchMedia()
			// Desktop
			mm.add('(min-width: 1200px)', () => {gsap.to('.technology-block--type4 .technology-block__img--n2',
				{
					x: -600,
					scrollTrigger: {
						trigger: '.technology-block--type4 .technology-block__img-box--n2',
						scrub: 1.7
					}
				})
			})
			// Tablet-mobile
			mm.add('(max-width: 1199px)', () => {gsap.to('.technology-block--type4 .technology-block__img--n2',
				{
					x: 100,
					scrollTrigger: {
						trigger: '.technology-block--type4 .technology-block__img-box--n2',
						scrub: 1.7
					}
				})
			})
		}

		// Type 5
		if (target.classList.contains('technology-block--type5')) {
			gsap.to(['.technology-block--type5 .technology-block__img-box--n1', '.technology-block--type5 .technology-block__img-box--n2'], {
				opacity: 1,
				y: 0,
				duration: 1,
				stagger: .5,
				scrollTrigger: {
					trigger: '.technology-block--type5 .technology-block__img-box--n1'
				}
			})
			gsap.to('.technology-block--type5 .technology-block__title',
				{
					y: 0,
					opacity: 1,
					'webkitFilter': 'blur(0px)',
					'filter': 'blur(0px)',
					duration: 2,
					scrollTrigger: {
						trigger: '.technology-block--type5 .technology-block__title'
					}
				})
			gsap.to('.technology-block--type5 .technology-block__text',
				{
					opacity: 1,
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: '.technology-block--type5 .technology-block__text'
					}
				})
			gsap.to('.technology-block--type5 .technology-block__img--n1',
				{
					y: -200,
					duration: 1,
					scrollTrigger: {
						trigger: '.technology-block--type5 .technology-block__img--n1',
						scrub: 1.7
					}
				})
			gsap.fromTo('.technology-block--type5 .technology-block__img--n2',
				{y:-100},
				{
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: '.technology-block--type5 .technology-block__img--n2',
						scrub: 1.7
					}
				})
		}

		// Type 6
		if (target.classList.contains('technology-block--type6')) {
			gsap.to('.technology-block--type6 .technology-block__img-box--n1', {
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '.technology-block--type6 .technology-block__img-box--n1'
				}
			})
			gsap.to('.technology-block--type6 .technology-block__title',
				{
					y: 0,
					opacity: 1,
					'webkitFilter': 'blur(0px)',
					'filter': 'blur(0px)',
					duration: 2,
					scrollTrigger: {
						trigger: '.technology-block--type6 .technology-block__title'
					}
				})
			gsap.to('.technology-block--type6 .technology-block__text',
				{
					opacity: 1,
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: '.technology-block--type6 .technology-block__text'
					}
				})
		}

		// Type 7
		if (target.classList.contains('technology-block--type7')) {
			gsap.to(['.technology-block--type7 .technology-block__img-box--n1', '.technology-block--type7 .technology-block__img-box--n2'], {
				opacity: 1,
				y: 0,
				duration: 1,
				stagger: .5,
				scrollTrigger: {
					trigger: '.technology-block--type7 .technology-block__img-box--n1'
				}
			})
			gsap.to('.technology-block--type7 .technology-block__img--n2', {
				y: -200,
				duration: 1,
				scrollTrigger: {
					trigger: '.technology-block--type7 .technology-block__img--n1',
					scrub: 2,
					start: "center bottom"
				}
			})
			gsap.to('.technology-block--type7 .technology-block__title',
				{
					y: 0,
					opacity: 1,
					'webkitFilter': 'blur(0px)',
					'filter': 'blur(0px)',
					duration: 2,
					scrollTrigger: {
						trigger: '.technology-block--type7 .technology-block__title'
					}
				})
			gsap.to('.technology-block--type7 .technology-block__text',
				{
					opacity: 1,
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: '.technology-block--type7 .technology-block__text'
					}
				})
		}

		// Type 8
		if (target.classList.contains('technology-block--type8')) {
			gsap.to('.technology-block--type8 .technology-block__img-box--n1', {
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '.technology-block--type8 .technology-block__img-box--n1'
				}
			})
			gsap.to('.technology-block--type8 .technology-block__title',
				{
					y: 0,
					opacity: 1,
					'webkitFilter': 'blur(0px)',
					'filter': 'blur(0px)',
					duration: 2,
					scrollTrigger: {
						trigger: '.technology-block--type8 .technology-block__title'
					}
				})
			gsap.to('.technology-block--type8 .technology-block__text',
				{
					opacity: 1,
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: '.technology-block--type8 .technology-block__text'
					}
				})
		}

		// Type 9
		if (target.classList.contains('technology-block--type9')) {
			gsap.to(['.technology-block--type9 .technology-block__img-box--n1', '.technology-block--type9 .technology-block__img-box--n2'], {
				opacity: 1,
				y: 0,
				duration: 1,
				stagger: .5,
				scrollTrigger: {
					trigger: '.technology-block--type9 .technology-block__img-box--n1'
				}
			})
			gsap.to('.technology-block--type9 .technology-block__title',
				{
					y: 0,
					opacity: 1,
					'webkitFilter': 'blur(0px)',
					'filter': 'blur(0px)',
					duration: 2,
					scrollTrigger: {
						trigger: '.technology-block--type9 .technology-block__title'
					}
				})
			gsap.to('.technology-block--type9 .technology-block__text',
				{
					opacity: 1,
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: '.technology-block--type9 .technology-block__text'
					}
				})
			const mm = gsap.matchMedia()
			// Desktop
			mm.add('(min-width: 1200px)', () => {

				gsap.to('.technology-block--type9 .technology-block__img--n1', {
					y: 200,
					duration: 1,
					scrollTrigger: {
						trigger: '.technology-block--type9 .technology-block__img--n1',
						scrub: 2,
						start: "center bottom"
					}
				})
				gsap.to('.technology-block--type9 .technology-block__img--n2', {
					y: -200,
					duration: 1,
					scrollTrigger: {
						trigger: '.technology-block--type9 .technology-block__img--n2',
						scrub: 2,
						start: "center bottom"
					}
				})
			})
			// Tablet-mobile
			mm.add('(max-width: 1199px)', () => {
				gsap.to('.technology-block--type9 .technology-block__img--n1', {
					y: -60,
					duration: 1,
					scrollTrigger: {
						trigger: '.technology-block--type9 .technology-block__img--n1',
						scrub: 2,
					}
				})
				gsap.to('.technology-block--type9 .technology-block__img--n2', {
					y: 60,
					duration: 1,
					scrollTrigger: {
						trigger: '.technology-block--type9 .technology-block__img--n2',
						scrub: 2,
					}
				})
			})

		}

		// Type 10
		if (target.classList.contains('technology-block--type10')) {
			gsap.to(['.technology-block--type10 .technology-block__img-box--n1', '.technology-block--type10 .technology-block__img-box--n2'], {
				opacity: 1,
				y: 0,
				duration: 1,
				stagger: .5,
				scrollTrigger: {
					trigger: '.technology-block--type10 .technology-block__img-box--n1'
				}
			})
			gsap.to('.technology-block--type10 .technology-block__title',
				{
					y: 0,
					opacity: 1,
					'webkitFilter': 'blur(0px)',
					'filter': 'blur(0px)',
					duration: 2,
					scrollTrigger: {
						trigger: '.technology-block--type10 .technology-block__title'
					}
				})
			gsap.to('.technology-block--type10 .technology-block__text',
				{
					opacity: 1,
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: '.technology-block--type10 .technology-block__text'
					}
				})

			const mm = gsap.matchMedia()
			// Desktop
			mm.add('(min-width: 1200px)', () => {
				gsap.to('.technology-block--type10 .technology-block__img--n1', {
					x: 100,
					scrollTrigger: {
						trigger: '.technology-block--type10 .technology-block__img--n1',
						scrub: 2,
						start: "center bottom"
					}
				})
			})
			// Tablet-mobile
			mm.add('(max-width: 1199px)', () => {
				gsap.to('.technology-block--type10 .technology-block__img--n1', {
					x: 40,
					scrollTrigger: {
						trigger: '.technology-block--type10 .technology-block__img--n1',
						scrub: 2,
					}
				})
			})
		}

		// Type 11
		if (target.classList.contains('technology-block--type11')) {
			gsap.to('.technology-block--type11 .technology-block__img-box--n1', {
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: '.technology-block--type11 .technology-block__img-box--n1'
				}
			})
			gsap.to('.technology-block--type11 .technology-block__title',
				{
					y: 0,
					opacity: 1,
					'webkitFilter': 'blur(0px)',
					'filter': 'blur(0px)',
					duration: 2,
					scrollTrigger: {
						trigger: '.technology-block--type11 .technology-block__title'
					}
				})
			gsap.to('.technology-block--type11 .technology-block__text',
				{
					opacity: 1,
					y: 0,
					duration: 1,
					delay: .5,
					scrollTrigger: {
						trigger: '.technology-block--type11 .technology-block__text'
					}
				})
		}
	})
})
