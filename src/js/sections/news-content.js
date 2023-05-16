import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.news-content')
	if (!target) return

	const productList = gsap.utils.toArray(['.news-content__time', '.news-content__title', '.news-content__text', '.news-content__bottom-box'])
	productList.forEach((product, index) => {
		gsap.fromTo(product, {
			y: 100,
			opacity: 0
		},{
			scrollTrigger: {
				trigger: product
			},
			y: 0,
			delay: .2,
			opacity: 1,
		})
	})
})

