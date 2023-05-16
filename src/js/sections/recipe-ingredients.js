import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.recipe-ingredients')
	if (!target) return

	gsap.to('.recipe-ingredients__col', {
		opacity: 1,
		y: 0,
		stagger: .5,
		delay: 1,
		scrollTrigger: {
			trigger: '.recipe-ingredients__col'
		}
	})
})

