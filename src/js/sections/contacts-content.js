import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.contacts-content')
	if (!target) return

	const mm = gsap.matchMedia()
	// Desktop
	mm.add('(min-width: 1200px)', () => {
		const textColsList = document.querySelectorAll('.contacts-content__col')
		textColsList.forEach((textCol) => {

			gsap.fromTo(textCol, {
				opacity: 0,
				x: 100
			}, {
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: textCol,
					start: "center 90%"
				}
			})
		})

		const leftColElems = document.querySelectorAll(['.contacts-content__title', '.contacts-content__form'])
		leftColElems.forEach((elem) => {

			gsap.fromTo(elem, {
				opacity: 0,
				x: -200
			}, {
				opacity: 1,
				x: 0,
				duration: .7,
				scrollTrigger: {
					trigger: elem,
					start: "center 90%"
				}
			})
		})
	})
	// Tablet-mobile
	mm.add('(max-width: 1199px)', () => {
		const textColsList = document.querySelectorAll('.contacts-content__col')
		textColsList.forEach((textCol) => {

			gsap.fromTo(textCol, {
				opacity: 0,
				y: 70
			}, {
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: textCol,
				}
			})
		})

		const leftColElems = document.querySelectorAll(['.contacts-content__title', '.contacts-content__form'])
		leftColElems.forEach((elem) => {

			gsap.fromTo(elem, {
				opacity: 0,
				y: 70
			}, {
				opacity: 1,
				y: 0,
				duration: .7,
				scrollTrigger: {
					trigger: elem,
				}
			})
		})
	})
})
