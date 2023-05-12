import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.section-image-back')
	if(!target) return

	const boxList = gsap.utils.toArray('.section-image-back')

	boxList.forEach((box) => {
		const img = box.querySelector('.section-image-back__bg')
		gsap.to(img, {
			scrollTrigger: {
				trigger: box,
				scrub: 1.3,
				invalidateOnRefresh: true
			},
			backgroundPosition: "center top -"+(img.offsetHeight)/10+100+'px',
			ease: "none",
		});
	})
})
