import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const boxList = gsap.utils.toArray('.animated-image')

boxList.forEach((box) => {
	const img = box.querySelector('.animated-image__img')
	gsap.to(img, {
		scrollTrigger: {
			trigger: box,
			scrub: 4,
			invalidateOnRefresh: true
		},
		y: box.offsetHeight - img.offsetHeight,
		ease: "none"
	});
})

