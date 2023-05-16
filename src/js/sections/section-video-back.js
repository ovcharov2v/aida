import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.section-video-back')
	if(!target) return

	const boxList = gsap.utils.toArray('.section-video-back')

	boxList.forEach((box) => {
		const video = box.querySelector('.section-video-back__bg')
		gsap.fromTo(video, {
			yPercent: -10,
		},{
			scrollTrigger: {
				trigger: box,
				scrub: .7,
				invalidateOnRefresh: true
			},
			yPercent: 10,
			ease: "none",
		});
	})
})
