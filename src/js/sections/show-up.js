import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


document.addEventListener('DOMContentLoaded', () => {
	const targets = document.querySelectorAll('.show-up')
	if (!targets.length) return

	targets.forEach((target) => {
		gsap.fromTo(target, {
			y: 30,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: .7,
			delay: .5,
			scrollTrigger: {
				trigger: target
			}
		})
	})
})

