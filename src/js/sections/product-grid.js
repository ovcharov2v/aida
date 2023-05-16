import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.product-grid')
	if (!target) return

	const productList = gsap.utils.toArray('.product-grid .product-card')
	const haveFourCols = target.classList.contains('product-grid--page-product')
	const counter = haveFourCols ? 4 : 3
	let productRowArr = []

	productList.forEach((product, index) => {
		productRowArr.push(product)
		if (productRowArr.length >= counter || productList.length === index + 1) {
			console.log(productRowArr)
			gsap.fromTo([productRowArr], {
				y: 100,
				opacity: 0
			}, {
				scrollTrigger: {
					trigger: productRowArr[0],
				},
				y: 0,
				stagger: .3,
				opacity: 1
			})
			productRowArr = []
		}
	})
})

