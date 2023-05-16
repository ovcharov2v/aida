import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.product-features')
	if (!target) return

	const colList = document.querySelectorAll('.product-features__col')

	colList.forEach((col, index)=>{
		if(index%2===0) {
			gsap.fromTo(col,{
				y: 100,
				opacity: 0
			},{
				y: 0,
				opacity: 1,
				duration: 1.5,
				scrollTrigger: {
					trigger: col,
					start: "20% bottom"
				}
			})
		}
		else {
			gsap.fromTo(col,{
				y: 100,
				opacity: 0
			},{
				y: 0,
				opacity: 1,
				duration: 1,
				delay: 0.5,
				scrollTrigger: {
					trigger: col,
					start: "20% bottom"
				}
			})
		}

	})
})

