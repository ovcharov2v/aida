import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.history-timeline')
	if (!target) return

	gsap.to('.history-timeline__marker', {
		boxShadow: "0 0 0 19px rgba(251, 251, 251, 0.5)",
		duration: .7,
		delay: 2,
		repeat: -1,
		yoyo: true
	})

	const elemList = gsap.utils.toArray('.history-timeline__elem-col')

	elemList.forEach((el) => {
		const marker = el.querySelector('.history-timeline__marker')
		const title = el.querySelector('.history-timeline__title')
		const text = el.querySelector('.history-timeline__text')
		const img = el.querySelector('.history-timeline__img')
		const config = {
			scrollTrigger: {
				trigger: el,
				start: "top 70%"
			},
			x: 0,
			opacity: 1,
		}
		gsap.to(title, config)
		gsap.to(text, config)
		gsap.to(img, config)
		gsap.to(marker, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%"
			},
			scale: 1,
		})
	})
})

