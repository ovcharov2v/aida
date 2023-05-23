import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.product-grid')
	if (!target) return

	const productList = gsap.utils.toArray('.product-grid .product-card')
	let colCounter = target.classList.contains('product-grid--page-product') ? 4 : 3

	const mm = gsap.matchMedia()
	if(colCounter === 3) {
		// Desktop
		mm.add('(min-width: 1200px)', () => {
			let count = 0
			productList.forEach((product) => {
				gsap.to(product, {
					scrollTrigger: {
						trigger: product,
					},
					y: 0,
					opacity: 1,
					delay: () => .3 * count
				})
				count >= 2 ? count = 0 : count++
			})
		})
		// Tablet-mobile
		mm.add('(max-width: 1199px)', () => {
			productList.forEach((product) => {
				gsap.to(product, {
					scrollTrigger: {
						trigger: product,
					},
					y: 0,
					opacity: 1,
				})
			})
		})
	}
	else {
		// Desktop
		mm.add('(min-width: 1200px)', () => {
			let count = 0
			productList.forEach((product) => {
				gsap.to(product, {
					scrollTrigger: {
						trigger: product,
					},
					y: 0,
					opacity: 1,
					delay: () => .3 * count
				})
				count >= 3 ? count = 0 : count++
			})
		})
		// Tablet
		mm.add('(min-width: 768px) and (max-width: 1199px)', () => {
			let count = 0
			productList.forEach((product) => {
				gsap.to(product, {
					scrollTrigger: {
						trigger: product,
					},
					y: 0,
					opacity: 1,
					delay: () => .3 * count
				})
				count >= 2 ? count = 0 : count++
			})
		})
		// Mobile
		mm.add('(max-width: 767px)', () => {
			productList.forEach((product) => {
				gsap.to(product, {
					scrollTrigger: {
						trigger: product,
					},
					y: 0,
					opacity: 1,
				})
			})
		})
	}
})

