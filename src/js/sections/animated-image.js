import gsap from "gsap";

const boxList = gsap.utils.toArray('.animated-image')

let counter = 1
boxList.forEach((box, index) => {
	const img = box.querySelector('.animated-image__img')
	const scrub = counter + 1.7
	gsap.fromTo(img, {
		yPercent: -10,
		scale: 1.2,
	}, {
		scrollTrigger: {
			trigger: box,
			scrub: scrub,
			invalidateOnRefresh: true,
		},
		yPercent: 10,
		scale: 1.2,
		ease: "none",
	});
	if(counter > 3) {
		counter = 0
	}
	else {
		counter++
	}
})

