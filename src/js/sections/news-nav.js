import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.news-nav')
	if (!target) return

	gsap.to('.news-nav__elem', {
		scrollTrigger: {
			trigger: target
		},
		opacity: 1,
		y: 0,
		stagger: .15,
		duration: 1,
		ease: 'ease-in-out'
	})

	const newsNavLinks = document.querySelectorAll('.news-nav__link')
	let animationBegin = false

	newsNavLinks.forEach((navLink) => {
		navLink.addEventListener('click', () => {
			if (!navLink.classList.contains('news-nav__link--active') && !animationBegin) {
				animationBegin = true
				target.querySelector('.news-nav__link--active').classList.remove('news-nav__link--active')
				navLink.classList.add('news-nav__link--active')
				const currentContent = target.querySelector('.news-nav__content--active')
				const newContent = target.querySelector(`#${navLink.dataset.content}`)

				gsap.timeline({
					onComplete: () => {
						currentContent.classList.remove('news-nav__content--active')
						newContent.classList.add('news-nav__content--active')
						animationBegin = false
					}
				})
					.to(currentContent, {
						x: '-100vw',
						opacity: 0,
						duration: 1,
					})
					.fromTo(newContent, {
						x: '100vw',
						opacity: 0,
					}, {
						x: 0,
						opacity: 1,
						duration: 1
					}, "-=0.9")
			}
		})
	})
})

