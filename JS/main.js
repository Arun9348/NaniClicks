(function ($) {
	"use strict";

	document.addEventListener('keydown', (e) => {

		switch (e.key) {
	
			case 'Escape':
			case 'Esc':
				window.location.hash = "#close";
				break;
	
			case 'Left':
			case 'ArrowLeft':
				const currentEl = document.querySelector(window.location.hash);
				if (!currentEl) return;
	
				const prevEl = currentEl.previousElementSibling;
				if (!prevEl) return;
	
				window.location.hash = `#${prevEl.id}`;
	
				break;
	
			case 'Right':
			case 'ArrowRight':
				const currentEl2 = document.querySelector(window.location.hash);
				if (!currentEl2) return;
	
				const nextEl = currentEl2.nextElementSibling;
				if (!nextEl) return;
	
				window.location.hash = `#${nextEl.id}`;
	
				break;
	
			default:
				return;
	
		}
	});

	// jQuery('#datepicker').datepicker({
	// 	format: 'dd-mm-yyyy',
	// 	startDate: '+1d'
	//   });
	// mobile-drop-down
	jQuery('.dropdown-icon').on('click', function () {
		jQuery(this).toggleClass('active').next('ul').slideToggle();
		jQuery(this).parent().siblings().children('ul').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});

	// niceSelect
	$('select').niceSelect();

	// wow animate 
	setTimeout(myGreeting, 1800);
	function myGreeting() {
		var wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0,          // distance to the element when triggering the animation (default is 0)
				mobile: true,       // trigger animations on mobile devices (default is true)
				live: true,       // act on asynchronously loaded content (default is true)
				callback: function (box) {
					// the callback is fired every time an animation is started
					// the argument that is passed in is the DOM node being animated
				},
				scrollContainer: null,    // optional scroll container selector, otherwise use window,
				resetAnimation: true,     // reset animation on end (default is true)
			}
		);
		wow.init();
	}

	// scroll button
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 300) {
			$('.scroll-btn').addClass('show');
		} else {
			$('.scroll-btn').removeClass('show');
		}
	});
	$('.scroll-btn').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '300');
	});

	// mobile-menu

	$('.mobile-menu-btn').on("click", function () {
		$('.main-menu').addClass('show-menu');
	});

	$('.menu-close-btn').on("click", function () {
		$('.main-menu').removeClass('show-menu');
	});

	$('.grid').isotope({
		itemSelector: '.grid-item',
	  });
	  
	  // filter items on button click
	  $('.filter-button-group').on( 'click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$('.grid').isotope({ filter: filterValue });
		$('.filter-button-group li').removeClass('active');
		$(this).addClass('active');
	  });

	  $('.grid').masonry({
		// options
		itemSelector: '.grid-item',
	  });
	// video gallery
	const videos = [
		{
			id: 1,
			title: "House Warming Ceremony",
			description: "Celebrate the joy of moving into a new home with friends and family. This video captures the warmth, blessings, and happiness of a housewarming ceremony.",
			thumbnail: '../images/bg/youtube/houseWarming.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ztYQ2fXVCSE?si=qLm0-GFE1a9OvtQz?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
		},
		{
			id: 2,
			title: "Half Saree Ceremony",
			description: "A beautiful tradition marking a young girl's transition into womanhood. This video showcases the vibrant celebrations, rituals, and cultural significance of the Half Saree Ceremony.",
			thumbnail: '../images/bg/youtube/halfSaree.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hBv12g_x7CA?si=Gm2yoXD4xPcE_Y77?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
		},
		{
			id: 3,
			title: "Birthday Celebration",
			description: "A joyful gathering filled with laughter, cake, and cherished moments. This video captures the essence of a memorable birthday celebration.",
			thumbnail: '../images/bg/youtube/birthdayCelebration.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/R4EGcxhftJo?si=HYmQbUCjus8k1p0y?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
		},
		{
			id: 4,
			title: "Temple Construction Inauguration",
			description: "Witness the spiritual and cultural significance of a temple's inauguration. This video highlights the rituals, prayers, and community involvement in this sacred event.",
			thumbnail: '../images/bg/youtube/templeConstruction.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SIwnAOVu3dw?si=7OUHu-8q7P53wSXf?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
		},
		{
			id: 5,
			title: "Sports shots",
			description: "Relive the excitement and energy of sports moments. This video captures the thrill, teamwork, and joy of sports activities.",
			thumbnail: '../images/bg/youtube/sportsShots.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Z-c9R7zhJGk?si=nGuHM7DEF0XDFKx7?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
		},
		{
			id: 6,
			title: "Pre Birthday Shoot",
			description: "A creative and fun-filled prelude to a birthday celebration. This video showcases candid moments and unique themes for a pre-birthday shoot.",
			thumbnail: '../images/bg/youtube/preBirthday.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/O7GWCHT607Q?si=WGgq1LOB6fa_89Pt?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
		},
		{
			id: 7,
			title: "House Warming Ceremony",
			description: "A heartfelt celebration of a new beginning. This video captures the blessings, rituals, and happiness of a housewarming ceremony.",
			thumbnail: '../images/bg/youtube/houseWarming2.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wvKVOdaAUWk?si=nJcNALt81E-cjBkt?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
		},
		{
			id: 8,
			title: "Family Shoot",
			description: "Cherish the love and togetherness of family moments. This video highlights the joy and warmth of a family photoshoot.",
			thumbnail: '../images/bg/youtube/familyShoot.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Oah55jyWm7A?si=5OEsOuvzqcyN76KU?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
		},
	];

	// Initialize gallery and load the first video by default
	function initGallery() {

		let offset = 50;
		let circleContainer = document.querySelector(".circle-container");
		let circlePath = document.querySelector('.circle-container path');
		let pathLength = circlePath.getTotalLength();
		circlePath.style.transition = circlePath.style.WebkitTransition = 'none';
		circlePath.style.strokeDasharray = pathLength;
		circlePath.style.strokeDashoffset = pathLength;
		circlePath.getBoundingClientRect();
		circlePath.style.transition = circlePath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		let updateLoader = () => {
			let scrollTop = window.scrollY;
			let docHeight = document.body.offsetHeight;
			let winHeight = window.innerHeight;
			let height = docHeight - winHeight;
			let progress = pathLength - (scrollTop * pathLength / height);
			circlePath.style.strokeDashoffset = progress;
			if (scrollTop > offset) {
				circleContainer.classList.add("active");
			} else {
				circleContainer.classList.remove("active");
			}
		}
		circleContainer.onclick = function () {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
		window.onscroll = () => {
			updateLoader();
		}
		updateLoader();
		const previewsContainer = document.getElementById('videoPreviews');
		const mainVideoContainer = document.getElementById('mainVideo');
		const videoInfoContainer = document.getElementById('videoInfo');
		
		// Populate video previews
		videos.forEach((video, index) => {
			const previewElement = document.createElement('div');
			previewElement.className = `video-preview ${index === 0 ? 'active' : ''}`;
			previewElement.innerHTML = `
				<img src="${video.thumbnail}" alt="${video.title}">
				<div class="play-icon">▶</div>
				<div class="title">${video.title}</div>
			`;
			
			previewElement.addEventListener('click', () => {
				// Update active class
				document.querySelector('.video-preview.active')?.classList.remove('active');
				previewElement.classList.add('active');
				
				// Load the selected video
				loadVideo(video);
			});
			
			previewsContainer.appendChild(previewElement);
		});
		
		// Load the default (first) video
		loadVideo(videos[0]);

		// Setup auto-scrolling
		setupAutoScroll();
	}

	// Load a video into the main player
	function loadVideo(video) {
		const mainVideoContainer = document.getElementById('mainVideo');
		const videoInfoContainer = document.getElementById('videoInfo');
		
		// Set iframe using the provided iframe code
		mainVideoContainer.innerHTML = video.iframeCode;
		
		// Make iframe responsive
		const iframe = mainVideoContainer.querySelector('iframe');
		iframe.style.position = 'absolute';
		iframe.style.top = '0';
		iframe.style.left = '0';
		iframe.style.width = '100%';
		iframe.style.height = '100%';
		
		// Update video info
		videoInfoContainer.innerHTML = `
			<h2>${video.title}</h2>
			<p>${video.description}</p>
		`;
	}

	// Setup auto-scrolling for previews
	function setupAutoScroll() {
		const previewsContainer = document.getElementById('videoPreviews');
		let isHovering = false;
		let autoScrollInterval;
		let isResetting = false;
		
		previewsContainer.addEventListener('mouseenter', () => {
			isHovering = true;
			clearInterval(autoScrollInterval);
		});
		
		previewsContainer.addEventListener('mouseleave', () => {
			isHovering = false;
			startAutoScroll();
		});
		
		function startAutoScroll() {
			autoScrollInterval = setInterval(() => {
				if (!isHovering && !isResetting) {
					if (previewsContainer.scrollLeft + previewsContainer.clientWidth >= previewsContainer.scrollWidth - 1) {
						// Immediate reset to beginning
						isResetting = true;
						previewsContainer.scrollTo({
							left: 0,
							behavior: 'smooth'
						});
						// Reset the isResetting flag after animation completes
						setTimeout(() => {
							isResetting = false;
						}, 500); // Match this with scroll animation duration
					} else {
						previewsContainer.scrollLeft += 1;
					}
				}
			}, 30);
		}
		
		startAutoScroll();
	}

	// Initialize the gallery when DOM is loaded
	document.addEventListener('DOMContentLoaded', initGallery);

// Services slider
var swiper = new Swiper(".services-slider", {
	loop: true,
	slidesPerView: 1,
    loopAdditionalSlides: 0,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	speed: 2000,
	autoplay: {
		delay: 1500,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// insta-feed-slider
var swiper = new Swiper(".insta-feed-slider", {
	slidesPerView: 1,
	speed: 800,
	loop: true,
	freeMode: true,
	spaceBetween: 10,
	grabCursor: true,
	slidesPerView: 8,
	loop: true,
	autoplay: {
		delay: 1,
		disableOnInteraction: true
	},
	// freeMode: true,
	speed: 5000,
	freeModeMomentum: false,
	pagination: {
		el: ".swiper-pagination",
		clickable: 'true',
	},
	breakpoints: {
		280: {
			slidesPerView: 2,
			navigation: false,
		},
		386: {
			slidesPerView: 2,
			navigation: false,
		},
		576: {
			slidesPerView: 3,
			navigation: false,
		},
		768: {
			slidesPerView: 4,
			navigation: false,
		},
		992: {
			slidesPerView: 4
		},
		1200: {
			slidesPerView: 5
		},
		1400: {
			slidesPerView: 6
		},
	}
});

//   personal center mode slider
var swiper = new Swiper('.personal-center-banner', {
	slidesPerView: 3,
	centeredSlides: true,
	loop: true,
	speed: 1000,
	spaceBetween: 30,
	// autoplay: true,
	mousewheel: {
		enabled: true,
		sensitivity: 5.5,
	  },
	pagination: {
	  el: '.swiper-center-pagination',
	  clickable: true,
	  renderBullet: function (index, className) {
		return '<span class="' + className + '">' + (index + 1) + '</span>';
	  },
	},
	breakpoints: {
		280: {
			slidesPerView: 2,
			navigation: false,
		},
		386: {
			slidesPerView: 2,
			navigation: false,
		},
		576: {
			slidesPerView: 2,
			navigation: false,
		},
		768: {
			slidesPerView: 2,
			navigation: false,
		},
		1200: {
			slidesPerView: 2,
			navigation: false,
		},
		1400: {
			slidesPerView: 3,
			navigation: false,
		}
	}
  });

  // -----------theme night and dark mood------------
var xoon_theme = localStorage.getItem('xoon_theme');

if( xoon_theme === 'dark' ) {
	$('body').addClass('dark');
}

}(jQuery));
