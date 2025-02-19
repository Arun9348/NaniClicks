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

	// parallax
	var image = document.getElementsByClassName('parralax-image');
	new simpleParallax(image, {
		orientation: 'right',
	delay: 0.4
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
	// Progress bar
	document.addEventListener("DOMContentLoaded", function (event) {
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
	});

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

// Home Three Banner Slider
new Swiper('.hero3-slider', {
	slidesPerView: 1,
	speed: 1500,
	loop: true,
	spaceBetween: 10,
	loop: true,
	centeredSlides: true,
	roundLengths: true,
	parallax: true,
	effect: 'fade',
	pagination: {
		el: ".banner-paginnation",
		clickable: 'true',
	  },
	fadeEffect: {
	  crossFade: true,
	},
  
	autoplay: {
	  delay: 4000
	},
  
  });

  // Our Partner
// var swiper = new Swiper(".our-patner-slider", {
// 	slidesPerView: 1,
// 	loop: true,
// 	spaceBetween: 0,
// 	slidesPerView: 5,
// 	speed: 5000,
// 	autoplay: {
// 		delay: 2000,
// 	},
	
// 	breakpoints: {
// 		280: {
// 			slidesPerView: 2,
// 			navigation: false,
// 		},
// 		386: {
// 			slidesPerView: 2,
// 			navigation: false,
// 		},
// 		576: {
// 			slidesPerView: 3,
// 			navigation: false,
// 		},
// 		768: {
// 			slidesPerView: 3,
// 			navigation: false,
// 		},
// 		992: {
// 			slidesPerView: 4
// 		},
// 		1200: {
// 			slidesPerView: 5
// 		},
// 		1400: {
// 			slidesPerView: 6
// 		},
// 	}
// });
// Our Partner
// var swiper = new Swiper(".about-img-slider", {
// 	slidesPerView: 1,
// 	loop: true,
// 	spaceBetween: 20,
// 	slidesPerView: 1,
// 	effect: 'fade',
// 		fadeEffect: {
// 			crossFade: true
// 		},
// 	speed: 3000,
// 	autoplay: {
// 		delay: 1500,
// 	},
// 	pagination: {
// 		el: ".about-img-paginnation",
// 		clickable: 'true',
// 	  },
// });

// Testimonial Slider2
var swiper = new Swiper(".testimonial-slider", {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 20,
	slidesPerView: 1,
	speed: 3000,
	autoplay: {
		delay: 2000,
	},
	pagination: {
		el: ".testimonial-paginnation",
		clickable: 'true',
	  },
});


// blog DT Slider
	var swiper = new Swiper(".blog-dt-img-slider", {
		loop: true,
		speed: 2000,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 1500,
		},
		navigation: {
			nextEl: ".swiper-button-next-m",
			prevEl: ".swiper-button-prev-m",
		  },
	});

// Home One Banner Slider
var swiper = new Swiper(".banner-slider1", {
	spaceBetween: 20,
	loop: true,
	slidesPerView: 2,
	speed: 2000,
		autoplay: {
			delay: 1500,
		},
	keyboard: {
	  enabled: true
	},
	pagination: {
	  el: ".swiper-pagination-h",
	  clickable: true,
	  renderBullet: function(index, className) {
		return '<span class="' + className + '">'+0 + (index + 1) + "</span>";
	  }
	},
  });

//   center-banner-slider
  var mySwiper = new Swiper ('.banner-center-slider', {
    loop: true,
    speed: 1000,
	centeredSlides: true,
    slidesPerView: 2,
	// autoplay:true,
    autoplay: {
       delay: 3000,
    },
	breakpoints: {
		280: {
			slidesPerView: 1,
			navigation: false,
		},
		386: {
			slidesPerView: 1,
			navigation: false,
		},
		576: {
			slidesPerView: 1,
			navigation: false,
		},
		768: {
			slidesPerView: 2,
			navigation: false,
		},
	}
})

// banner-pagination-slider
var mySwiper = new Swiper ('.banner-pagination-slider', {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
	// autoplay:true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	pagination: {
		el: ".swiper-pagination-num",
		clickable: true,
		renderBullet: function(index, className) {
		  return '<span class="' + className + '">'+0 + (index + 1) + "</span>";
		}
	  },
})

// banner-fullscreen-slider
var mySwiper = new Swiper ('.banner-fullscreen-slider', {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
	// autoplay:true,
	effect: 'fade',
	navigation: {
		nextEl: ".banner-full-prev1",
		prevEl: ".banner-full-next1",
	  },
	fadeEffect: {
		crossFade: true,
	},
})

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
