import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.where-buy-shops')
	if (!target) return

	const titlesList = document.querySelectorAll('.where-buy-shops__title')
	titlesList.forEach((title)=>{
		gsap.fromTo(title, {
			y: -30,
			opacity: 0
		},{
			scrollTrigger: {
				trigger: title,
				start: "center bottom"
			},
			y: 0,
			delay: .2,
			opacity: 1,
		})

	})

	const gridsList = document.querySelectorAll('.where-buy-shops__grid')
	gridsList.forEach((grid)=> {
		const shopsList = grid.querySelectorAll('.where-buy-shops__item')
		let shopsRowArr = []
		let trigger = null
		shopsList.forEach((product, index) => {
			shopsRowArr.push(product)
			if(shopsRowArr.length < 5 && shopsList.length !== index+1) {
			}
			else {
				gsap.fromTo([shopsRowArr], {
					x: 50,
					y: 100,
					opacity: 0
				},{
					scrollTrigger: {
						trigger: product
					},
					x: 0,
					y: 0,
					stagger: .2,
					opacity: 1,
				})
				shopsRowArr = []
				trigger = null
			}

		})
	})

})

