import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);

const loader = document.querySelector('.loader')
const evt = new Event('loader-animation-complete', {bubbles: true})
if(loader) {
	document.body.classList.add('overflow-hidden')

	gsap.timeline({
		onComplete: () => {
			document.dispatchEvent(evt)
		}
	})
		.to('.loader__logo', {scale: 1.5, duration: 2})
		.to('.loader__white-block', {xPercent: 100, duration: 2},'-=2')
		.to('.loader', {backgroundColor: '#000', duration: 3})
		.to('.loader__logo', {opacity: 0, duration: 1.5}, '-=3.2')
		.to('.loader', {opacity: 0, duration: 1})
		.to('.loader', {display: 'none', onComplete: () => {
				document.body.classList.remove('overflow-hidden')
			}}, '-=.5')
}
else {
	setTimeout(() => {
		document.dispatchEvent(evt)
	}, 100)
}


