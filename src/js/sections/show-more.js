import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const blockList = document.querySelectorAll('.show-more')
	if(blockList.length) {
		blockList.forEach((block)=>{
			const container = block.querySelector('.show-more__container')
			const button = block.querySelector('.show-more__button')
			if (!button || !block || !container) return

			button.addEventListener('click', () => {
				block.classList.add('show-more--active')
				const elems = document.querySelectorAll('.show-more__element')
				elems.forEach((elem) => {
					gsap.fromTo(elem,
						{
							y: 100
						},
						{
							y: 0,
							duration: 1,
							scrollTrigger: {
								trigger: elem,
							}
						})
				})

			})
		})
	}
})
