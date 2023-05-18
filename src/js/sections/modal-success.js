import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const boxList = document.querySelectorAll('.js-modal-success-box')
	if(!boxList.length) return

	boxList.forEach((box) => {
		const form = box.querySelector('.js-modal-success-trigger')
		const modal = box.querySelector('.modal-success')
		const modalWindow = box.querySelector('.modal-success__window')
		let animTl = gsap.timeline({paused: true})
		animTl.fromTo(
			modal,
			{
				opacity: 0
			},
			{
				opacity: 1,
				duration: .5
			})
			.fromTo(
				modalWindow,
				{
					opacity: 0,
					y: 100,
				},
				{
					opacity: 1,
					y: 0,
					duration: .5
				}, '-=0.3')

		form.addEventListener('submit', (evt) => {
			evt.preventDefault()
			form.reset()
			modal.classList.add('modal-success--show')
			animTl.play()
		})
		const closeButton = box.querySelector('.modal-success__close')
		closeButton.addEventListener('click', () => {
			animTl.reverse()
			setTimeout(() => {
				modal.classList.remove('modal-success--show')
			}, 700)
		})
	})
})
