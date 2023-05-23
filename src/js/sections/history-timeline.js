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

	const elemList = gsap.utils.toArray('.history-timeline__elem')

	elemList.forEach((el) => {
		const marker = el.querySelector('.history-timeline__marker')
		const title = el.querySelector('.history-timeline__title')
		const textList = el.querySelectorAll('.history-timeline__text')
		const img = el.querySelector('.history-timeline__img')

		gsap.to(title, {
			scrollTrigger: {
				trigger: title,
				start: "top 90%"
			},
			x: 0,
			opacity: 1,
		})
		textList.forEach((text)=>{
			gsap.to(text, {
				scrollTrigger: {
					trigger: text,
					start: "top 90%"
				},
				x: 0,
				opacity: 1,
			})
		})
		gsap.to(img, {
			scrollTrigger: {
				trigger: img,
				start: "top 90%"
			},
			x: 0,
			opacity: 1,
		})
		gsap.to(marker, {
			scrollTrigger: {
				trigger: marker,
				start: "top 90%"
			},
			scale: 1,
		})
	})
})

