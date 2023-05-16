import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.recipes-grid')
	if (!target) return

	// col 4
	if(target.classList.contains('recipes-grid--cols-4')) {
		const colList = gsap.utils.toArray('.recipes-grid__col')
		colList.forEach((col, index)=>{
			if(index%2 === 0) {
				gsap.fromTo(col, {
					y:-60
				},{
					y:60,
					scrollTrigger: {
						trigger: col,
						scrub: 1.2
					}
				})
			}
			else {
				gsap.fromTo(col, {
					y:60
				},{
					y:-60,
					scrollTrigger: {
						trigger: col,
						scrub: 1.2,
					}
				})
			}
		})
	}

	// col 3
	if(target.classList.contains('recipes-grid--cols-3')) {
		const colList = gsap.utils.toArray('.recipes-grid__col')
		colList.forEach((col, index)=>{
			if(index%2 === 0) {
				gsap.fromTo(col, {
					y:-60
				},{
					y:60,
					scrollTrigger: {
						trigger: col,
						scrub: 1.2
					}
				})
			}
			else {
				gsap.fromTo(col, {
					y:60
				},{
					y:-60,
					scrollTrigger: {
						trigger: col,
						scrub: 1.2,
					}
				})
			}
		})
	}

	// col 2
	if(target.classList.contains('recipes-grid--cols-2')) {
		const colList = gsap.utils.toArray('.recipes-grid__col')
		colList.forEach((col, index)=>{
			if(index%2 === 0) {
				gsap.fromTo(col, {
					y:-60
				},{
					y:60,
					scrollTrigger: {
						trigger: col,
						scrub: 1.2
					}
				})
			}
			else {
				gsap.fromTo(col, {
					y:60
				},{
					y:-60,
					scrollTrigger: {
						trigger: col,
						scrub: 1.2,
					}
				})
			}
		})
	}

	const cardList = gsap.utils.toArray('.recipes-grid__elem')
	cardList.forEach((card)=>{
		gsap.fromTo(card, {
			opacity: 0
		},{
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

