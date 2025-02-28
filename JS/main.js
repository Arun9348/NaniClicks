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

	jQuery('#datepicker').datepicker({
		format: 'dd-mm-yyyy',
		startDate: '+1d'
	  });
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
			title: "Auspicious Event",
			description: "Auspicious Pooja with Family and Friends",
			thumbnail: '../images/banner/personal1.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wFPPCvFcR-8?si=31igyUnXZWkKIIHH?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
		},
		{
			id: 2,
			title: "Birthday Blinks",
			description: "Birthday Celebration with Family and Friends",
			thumbnail: '../images/banner/birthday.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		},
		{
			id: 3,
			title: "Children Memories",
			description: "Childhood Memories with Family and Friends",
			thumbnail: '../images/bg/services/children/children1.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		},
		{
			id: 4,
			title: "Jingle Bell Shots",
			description: "Christmas Celebration",
			thumbnail: '../images/bg/services/christmas/christmas1.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hT_nvWreIhg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		},
		{
			id: 5,
			title: "Concert Night",
			description: "Concert Night with Family and Friends",
			thumbnail: '../images/bg/services/concert/concert1.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kJQP7kiw5Fk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		},
		{
			id: 6,
			title: "Graduation Day",
			description: "Graduation Day with Family and Friends",
			thumbnail: '../images/bg/services/graduation/graduation1.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CevxZvSJLk8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		},
		{
			id: 7,
			title: "Half Saree Ceremony",
			description: "Half Saree Ceremony with Family and Friends",
			thumbnail: '../images/bg/services/half-saree/half-saree1.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		},
		{
			id: 8,
			title: "House Warming Ceremony",
			description: "House Warming Ceremony with Family and Friends",
			thumbnail: '../images/bg/services/house-warming/house-warming1.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		},
		{
			id: 9,
			title: "Maternity Shoot",
			description: "Maternity Shoot with Family and Friends",
			thumbnail: '../images/bg/services/maternity/maternity1.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		},
		{
			id: 10,
			title: "Potraits Photography",
			description: "Potraits Photography with Family and Friends",
			thumbnail: '../images/bg/services/potraits/potraits1.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		},
		{
			id: 11,
			title: "Sports shots",
			description: "Sports shots fun and joy",
			thumbnail: '../images/bg/services/sports/sports1.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		},
		{
			id: 12,
			title: "Wedding Shots",
			description: "Wedding Shots with Family and Friends",
			thumbnail: '../images/bg/services/wedding/wedding1.webp',
			iframeCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		}
	];

	// Initialize gallery and load the first video by default
	function initGallery() {
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
				if (!isHovering) {
					if (previewsContainer.scrollLeft + previewsContainer.clientWidth >= previewsContainer.scrollWidth) {
						// Reset to beginning when reaching the end
						previewsContainer.scrollLeft = 0;
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
	// speed: 800,
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
	autoplay: true,
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

const dayNight = document.querySelector(".tt-style-switch");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("bi-brightness-low-fill")
    dayNight.querySelector("i").classList.toggle("bi-moon");
    document.body.classList.toggle("dark");

	var value = document.getElementById("body").className;
	var str = value;
	var last = str.split(' ').slice(-1)[0];
	if(  last === 'dark' ) {
		localStorage.setItem("xoon_theme", last);
	}else {
		localStorage.setItem("xoon_theme", '');
	}
	window.addEventListener("load", () => {
		if (document.body.classList.contains("dark")) {
			jQuery('.tt-style-switch i').addClass('bi bi-brightness-low-fill');
		} else {
			jQuery('.tt-style-switch i').addClass('bi bi-moon');
		}
	})
})

var xoon_theme = localStorage.getItem('xoon_theme');

if( xoon_theme === 'dark' ) {
	$('body').addClass('dark');
}

}(jQuery));
