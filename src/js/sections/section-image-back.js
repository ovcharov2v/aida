import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

