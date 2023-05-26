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

		gsap.to('.recipes-list__img',  {
			opacity: 1,
			y:0,
			duration: 1,
			delay: .5,
			scrollTrigger: {
				trigger: '.recipes-list__img'
			}
		})
	})
	// Tablet-mobile
	mm.add('(max-width: 1199px)', () => {
		gsap.to('.recipes-list__img',  {
			opacity: 1,
			y:0,
			duration: 1,
			delay: .5,
			scrollTrigger: {
				trigger: '.recipes-list__img'
			}
		})
	})

	gsap.to('.recipes-list__title1-block', {
		y: 0,
		opacity: 1,
		stagger: 0.5,
		'webkitFilter': 'blur(0px)',
		'filter': 'blur(0px)',
		duration: 2,
	})
	gsap.to('.recipes-list__title2-block', {
		y: 0,
		opacity: 1,
		stagger: 0.5,
		'webkitFilter': 'blur(0px)',
		'filter': 'blur(0px)',
		duration: 2,
		delay: 1,
	})
	gsap.to('.recipes-list__text-box',  {
		opacity: 1,
		y:0,
		duration: 1,
		delay: 2.5,
		scrollTrigger: {
			trigger: '.recipes-list__text-box'
		}
	})
	const textElems = document.querySelectorAll(['.recipes-list__text', '.recipes-list__list-elem'])
	textElems.forEach((elem, index) => {
		gsap.fromTo(elem, {
			opacity: 0,
			y: 100
		}, {
			opacity: 1,
			y: 0,
			duration: 1,
			delay: () => index/10,
			scrollTrigger: {
				trigger: elem,
			}
		})
	})
})

