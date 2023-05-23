import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.recipes-list')
	if (!target) return

	const container = document.querySelector('.recipes-list__container')
	const img = document.querySelector('.recipes-list__img')
	const mm = gsap.matchMedia()

	// Desktop
	mm.add('(min-width: 1200px)', () => {
		ScrollTrigger.create({
			trigger: img,
			pin: '.recipes-list__img',
			end: () => `+=${container.clientHeight - img.clientHeight}`,
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
	})
	// Tablet-mobile
	mm.add('(max-width: 1199px)', () => {
		gsap.fromTo('.recipes-list__img', {
			opacity: 0,
			y: 60
		}, {
			opacity: 1,
			y: 0,
			duration: 1,
			delay: .5,
			scrollTrigger: {
				trigger: '.recipes-list__img'
			}
		})
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
			y: 100
		}, {
			opacity: 1,
			y: 0,
			duration: 1,
			scrollTrigger: {
				trigger: elem,
			}
		})
	})
})

