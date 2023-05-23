import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.recipe-ingredients')
	if (!target) return

	const mm = gsap.matchMedia()
	const container = document.querySelector('.recipe-ingredients__col--white')
	const pinned = document.querySelector('.recipe-ingredients__todo')
	// Desktop
	mm.add('(min-width: 1200px)', () => {
		ScrollTrigger.create({
			trigger: container,
			pin: pinned,
			pinType: 'fixed',
			start: 'top 40px',
			anticipatePin: 1,
			end: () => `+=${container.clientHeight - pinned.clientHeight}`,
			//markers: true
		});

		gsap.to('.recipe-ingredients__col--white', {
			opacity: 1,
			delay: 1,
			scrollTrigger: {
				trigger: '.recipe-ingredients__col',
				start: '90px bottom'
			}
		})
		gsap.to('.recipe-ingredients__col--gray', {
			opacity: 1,
			y: 0,
			delay: 1.5,
			scrollTrigger: {
				trigger: '.recipe-ingredients__col',
				start: '90px bottom'
			}
		})
	})
	// Tablet-mobile
	mm.add('(max-width: 1199px)', () => {
		gsap.to('.recipe-ingredients__col--gray', {
			opacity: 1,
			y: 0,
			delay: 1,
			scrollTrigger: {
				trigger: '.recipe-ingredients__col'
			}
		})
	})

	const switcherLeft = document.querySelector('.recipe-ingredients__switcher--left')
	const switcherRight = document.querySelector('.recipe-ingredients__switcher--right')

	const anim = gsap.timeline({paused: true})
		.to('.recipe-ingredients__col--white', {
			x: 0,
			duration: .4,
		})

	switcherLeft.addEventListener('click', () => {
		anim.reverse()
		document.body.classList.remove('overflow-hidden')
	})
	switcherRight.addEventListener('click', () => {
		anim.play()
		document.body.classList.add('overflow-hidden')
	})
})

