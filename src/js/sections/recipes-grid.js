import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Swiper, { Navigation, Pagination } from 'swiper'

gsap.registerPlugin(ScrollTrigger)


document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.recipes-grid')
	if (!target) return

	// col 4
	if (target.classList.contains('recipes-grid--cols-4')) {
		const mm = gsap.matchMedia()

		// Desktop
		mm.add('(min-width: 1200px)', () => {
			gsap.fromTo(['.recipes-grid__elem:nth-child(4n)', '.recipes-grid__elem:nth-child(4n-2)'], {
				y: -60
			}, {
				y: 60,
				scrollTrigger: {
					trigger: '.recipes-grid__elem:nth-child(4n)',
					scrub: 1.2
				}
			})
			gsap.fromTo(['.recipes-grid__elem:nth-child(4n-1)', '.recipes-grid__elem:nth-child(4n-3)'], {
				y: 60
			}, {
				y: -60,
				scrollTrigger: {
					trigger: '.recipes-grid__elem:nth-child(4n-1)',
					scrub: 1.2
				}
			})
		})
		// Tablet
		mm.add('(min-width: 768px) and (max-width: 1199px)', () => {
			gsap.fromTo(['.recipes-grid__elem:nth-child(2n)'], {
				y: -50
			}, {
				y: 50,
				scrollTrigger: {
					trigger: '.recipes-grid',
					scrub: 1.2
				}
			})
			gsap.fromTo(['.recipes-grid__elem:nth-child(2n)'], {
				opacity: 0
			}, {
				opacity: 1,
				scrollTrigger: {
					trigger: '.recipes-grid',
				}
			})
			gsap.fromTo(['.recipes-grid__elem:nth-child(2n-1)'], {
				y: 50
			}, {
				y: -50,
				scrollTrigger: {
					trigger: '.recipes-grid',
					scrub: 1.2
				}
			})
			gsap.fromTo(['.recipes-grid__elem:nth-child(2n-1)'], {
				opacity:0
			}, {
				opacity: 1,
				scrollTrigger: {
					trigger: '.recipes-grid',
				}
			})
		})
		// Mobile
		mm.add('(max-width: 767px)', () => {
			const recipesList = document.querySelectorAll('.recipes-grid__elem')
			recipesList.forEach((recipe)=>{
				gsap.fromTo(recipe, {
					opacity: 1,
					y: 100,
				}, {
					opacity: 1,
					y: 0,
					scrollTrigger: {
						trigger: recipe,
						scrub: 1.2,
						end: "top 90%"
					}
				})
				gsap.fromTo(recipe, {
					opacity: 0
				}, {
					opacity: 1,
					scrollTrigger: {
						trigger: recipe,
						end: "top 90%"
					}
				})
			})
		})
	}

	// col 3
	if (target.classList.contains('recipes-grid--cols-3')) {
		const mm = gsap.matchMedia()
		// Desktop
		mm.add('(min-width: 1200px)', () => {
			gsap.fromTo(['.recipes-grid__elem:nth-child(3n-1)', '.recipes-grid__elem:last-child'], {
				y: -60
			}, {
				y: 0,
				scrollTrigger: {
					trigger: '.recipes-grid__elem:nth-child(3n-1)',
					end: 'top -300%',
					scrub: 1.2
				}
			})
			gsap.fromTo(['.recipes-grid__elem:not(:last-child):nth-child(3n)', '.recipes-grid__elem:not(:last-child):nth-child(3n-2)'], {
				y: 220
			}, {
				y: 100,
				scrollTrigger: {
					trigger: '.recipes-grid__elem:nth-child(3n)',
					scrub: 1.2,
					end: 'top -300%',
				}
			})
		})
		// Tablet
		mm.add('(min-width: 768px) and (max-width: 1199px)', () => {
			gsap.fromTo(['.recipes-grid__elem:nth-child(2n)'], {
				y: -60
			}, {
				y: 60,
				scrollTrigger: {
					trigger: '.recipes-grid__elem:nth-child(2n)',
					scrub: 1.2
				}
			})
			gsap.fromTo(['.recipes-grid__elem:nth-child(2n-1)'], {
				y: 60
			}, {
				y: -60,
				scrollTrigger: {
					trigger: '.recipes-grid__elem:nth-child(3n)',
					scrub: 1.2
				}
			})
		})
		// Mobile
		mm.add('(max-width: 767px)', () => {
			const recipesList = document.querySelectorAll('.recipes-grid__elem')
			recipesList.forEach((elem) =>{
				gsap.fromTo(elem, {
					y: 60
				}, {
					y: 0,
					scrollTrigger: {
						trigger: elem,
					}
				})
			})
		})
	}

	// col 2
	if (target.classList.contains('recipes-grid--cols-2')) {
		const mm = gsap.matchMedia()
		// Desktop
		mm.add('(min-width: 1200px)', () => {
			gsap.fromTo('.recipes-grid__elem:nth-child(2n)', {
				y: -60
			}, {
				y: 60,
				scrollTrigger: {
					trigger: '.recipes-grid__elem:nth-child(2n)',
					scrub: 1.2
				}
			})
			gsap.fromTo('.recipes-grid__elem:nth-child(2n-1)', {
				y: 60
			}, {
				y: -60,
				scrollTrigger: {
					trigger: '.recipes-grid__elem:nth-child(2n-1)',
					scrub: 1.2
				}
			})
		})
		// Tablet-mobile
		mm.add('(max-width: 1199px)', () => {
			let recipesSlider

			document.addEventListener('DOMContentLoaded', initRecipesSlider)


			window.addEventListener('resize', initRecipesSlider, true);


			function initRecipesSlider() {
				const slider = document.querySelector('.recipe-other__col-grid')
				if (!slider) return

				const width = window.innerWidth

				if (width >= 1200) {
					if (recipesSlider !== undefined) {
						recipesSlider.destroy(true, true)
						recipesSlider = undefined
					}
				} else {
					if (recipesSlider === undefined) {
						recipesSlider = new Swiper(slider, {
							modules: [ Navigation, Pagination ],
							slidesPerView: 1,
							navigation: {
								nextEl: '.slider-nav__btn--next',
								prevEl: '.slider-nav__btn--prev',
							},
							pagination: {
								el: '.slider-nav__pagination',
								clickable: true,
								bulletActiveClass: 'slider-nav__bullet--active',
								renderBullet: function (index, className) {
									return `<button class="slider-nav__bullet swiper-pagination-bullet" aria-label="Страница ${index}"></button>`;
								},
							},
							breakpoints: {
								768: {
									slidesPerView: 2,
									spaceBetween: 28,
								}
							}
						})
					}

				}
			}
		})
	}

	const cardList = gsap.utils.toArray('.recipes-grid__elem')
	cardList.forEach((card) => {
		gsap.fromTo(card, {
			opacity: 0
		}, {
			opacity: 1,
			scrollTrigger: {
				trigger: card,
				start: "top bottom",
				end: "top 70%",
				scrub: true,
			}
		})
	})
})

