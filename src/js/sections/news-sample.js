import gsap from "gsap"

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('.news-sample')
	if (!target) return

	const newsList = gsap.utils.toArray('.news-sample__card')

	newsList.forEach((news) => {
		gsap.fromTo(news, {
			y: 100,
			opacity: 0
		},{
			scrollTrigger: {
				trigger: news,
				start: "center bottom"
			},
			y: 0,
			stagger: .2,
			opacity: 1,
		})
	})
})

