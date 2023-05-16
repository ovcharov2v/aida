import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.recipes-list')
	if (!target) return

	ScrollTrigger.create({
		trigger: ".recipes-list__col-text",
		start: "top 121px",
		end: "bottom bottom",
		pin: '.recipes-list__img',
		//markers: true
	});

	gsap.fromTo('.recipes-list__img', {
		opacity: 0,
		x: 200
	}, {
		opacity: 1,
		x: 0,
		duration: 1,
		delay: .5,
		scrollTrigger: {
			trigger: '.recipes-list__img'
		}
	})

	gsap.fromTo('.recipes-list__title1', {
		opacity: 0,
		x: -200
	}, {
		opacity: 1,
		x: 0,
		duration: 1,
		scrollTrigger: {
			trigger: '.recipes-list__title1'
		}
	})
	gsap.fromTo('.recipes-list__title2', {
		opacity: 0,
		x: 200
	}, {
		opacity: 1,
		x: 0,
		duration: 1,
		scrollTrigger: {
			trigger: '.recipes-list__title2'
		}
	})
	const textElems = document.querySelectorAll(['.recipes-list__text', '.recipes-list__list-elem'])
	textElems.forEach((elem) => {
		gsap.fromTo(elem, {
			opacity: 0,
			y: 200
		}, {
			opacity: 1,
			y: 0,
			duration: 1,
			scrollTrigger: {
				trigger: elem,
				start: 'top bottom'
			}
		})
	})
})

