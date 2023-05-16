import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.recipe-product')
	if (!target) return

	gsap.to(['.recipe-product__title', '.recipe-product__button', '.recipe-product__img'], {
			opacity: 1,
			y:0,
			stagger: .2,
			scrollTrigger: {
				trigger: '.recipe-product__title'
			}
		})
})

