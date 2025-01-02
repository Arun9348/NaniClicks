(function ($) {
	"use strict";

 // preloader
 function counter_num() {
    var count = setInterval(function () {
      var c = parseInt($(".counter").text(), 0);
      $(".counter").text((++c).toString());
      if (c === 100) {
        clearInterval(count);
        $(".counter").addClass("hide");
        $(".preloader").addClass("active");
      }
    });
  }
  counter_num();

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

	//Preloder
	jQuery(window).on('load', function () {
		$(".egns-preloader").delay(1600).fadeOut("slow");
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


	// Magnific Popup video
	$('.popup-youtube').magnificPopup({
		type: 'iframe'
	});
	$('.popup-img').magnificPopup({
		type: 'iframe'
	});


	$(".counter-item").each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
					var el = document.querySelectorAll('.odometer')[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});



	// =======================================================================================
	// Magic cursor (no effect on small screens!)
	// =======================================================================================

	if ($("body").not(".is-mobile").hasClass("tt-magic-cursor")) {
		if ($(window).width() > 1024) {
			$(".magnetic-item").wrap('<div class="magnetic-wrap"></div>');

			if ($("a.magnetic-item").length) {
				$("a.magnetic-item").addClass("not-hide-cursor");
			}

			var $mouse = { x: 0, y: 0 }; // Cursor position
			var $pos = { x: 0, y: 0 }; // Cursor position
			var $ratio = 0.15; // delay follow cursor
			var $active = false;
			var $ball = $("#ball");

			var $ballWidth = 36; // Ball default width
			var $ballHeight = 36; // Ball default height
			var $ballOpacity = 0.5; // Ball default opacity
			var $ballBorderWidth = 2; // Ball default border width

			gsap.set($ball, {  // scale from middle and style ball
				xPercent: -50,
				yPercent: -50,
				width: $ballWidth,
				height: $ballHeight,
				borderWidth: $ballBorderWidth,
				opacity: $ballOpacity
			});

			document.addEventListener("mousemove", mouseMove);

			function mouseMove(e) {
				$mouse.x = e.clientX;
				$mouse.y = e.clientY;
			}

			gsap.ticker.add(updatePosition);

			function updatePosition() {
				if (!$active) {
					$pos.x += ($mouse.x - $pos.x) * $ratio;
					$pos.y += ($mouse.y - $pos.y) * $ratio;

					gsap.set($ball, { x: $pos.x, y: $pos.y });
				}
			}

			$(".magnetic-wrap").mousemove(function (e) {
				parallaxCursor(e, this, 2); // magnetic ball = low number is more attractive
				callParallax(e, this);
			});

			function callParallax(e, parent) {
				parallaxIt(e, parent, parent.querySelector(".magnetic-item"), 25); // magnetic area = higher number is more attractive
			}

			function parallaxIt(e, parent, target, movement) {
				var boundingRect = parent.getBoundingClientRect();
				var relX = e.clientX - boundingRect.left;
				var relY = e.clientY - boundingRect.top;

				gsap.to(target, {
					duration: 0.3,
					x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
					y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
					ease: Power2.easeOut
				});
			}

			function parallaxCursor(e, parent, movement) {
				var rect = parent.getBoundingClientRect();
				var relX = e.clientX - rect.left;
				var relY = e.clientY - rect.top;
				$pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
				$pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
				gsap.to($ball, { duration: 0.3, x: $pos.x, y: $pos.y });
			}


			// Magic cursor behavior
			// ======================

			// Magnetic item hover.
			$(".magnetic-wrap").on("mouseenter mouseover", function (e) {
				$ball.addClass("magnetic-active");
				gsap.to($ball, { duration: 0.3, width: 70, height: 70, opacity: 1 });
				$active = true;
			}).on("mouseleave", function (e) {
				$ball.removeClass("magnetic-active");
				gsap.to($ball, { duration: 0.3, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
				gsap.to(this.querySelector(".magnetic-item"), { duration: 0.3, x: 0, y: 0, clearProps: "all" });
				$active = false;
			});

			// Alternative cursor style on hover.
			$(".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a")
				.not(".magnetic-item") // omit from selection.
				.on("mouseenter", function () {
					gsap.to($ball, {
						duration: 0.3,
						borderWidth: 0,
						opacity: 0.2,
						backgroundColor: "#CCC",
						width: "100px",
						height: "100px",
					});
				}).on("mouseleave", function () {
					gsap.to($ball, {
						duration: 0.3,
						borderWidth: $ballBorderWidth,
						opacity: $ballOpacity,
						backgroundColor: "transparent",
						width: $ballWidth,
						height: $ballHeight,
						clearProps: "backgroundColor"
					});
				});

			// Overlay menu caret hover.
			$(".tt-ol-submenu-caret-wrap .magnetic-wrap").on("mouseenter", function () {
				gsap.to($ball, { duration: 0.3, scale: 0.6, borderWidth: 3 });
			}).on("mouseleave", function () {
				gsap.to($ball, { duration: 0.3, scale: 1, borderWidth: $ballBorderWidth });
			});

			// Cursor view on hover (data attribute "data-cursor="...").
			$("[data-cursor]").each(function () {
				$(this).on("mouseenter", function () {
					$ball.addClass("ball-view").append('<div class="ball-view-inner"></div>');
					$(".ball-view-inner").append($(this).attr("data-cursor"));
					gsap.to($ball, { duration: 0.3, yPercent: -75, width: 95, height: 95, opacity: 1, borderWidth: 0 });
					gsap.to(".ball-view-inner", { duration: 0.3, scale: 1, autoAlpha: 1 });
				}).on("mouseleave", function () {
					gsap.to($ball, { duration: 0.3, yPercent: -50, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity, borderWidth: $ballBorderWidth });
					$ball.removeClass("ball-view").find(".ball-view-inner").remove();
				});
				$(this).addClass("not-hide-cursor");
			});

			// Cursor drag on hover (class "cursor-drag"). For Swiper sliders.
			$(".swiper").each(function () {
				if ($(this).parent().attr("data-simulate-touch") === "true") {
					if ($(this).parent().hasClass("cursor-drag")) {
						$(this).on("mouseenter", function () {
							$ball.append('<div class="ball-drag"></div>');
							gsap.to($ball, { duration: 0.3, width: 60, height: 60, opacity: 1 });
						}).on("mouseleave", function () {
							$ball.find(".ball-drag").remove();
							gsap.to($ball, { duration: 0.3, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
						});
						$(this).addClass("not-hide-cursor");

						// Ignore "data-cursor" on hover.
						$(this).find("[data-cursor]").on("mouseenter mouseover", function () {
							$ball.find(".ball-drag").remove();
							return false;
						}).on("mouseleave", function () {
							$ball.append('<div class="ball-drag"></div>');
							gsap.to($ball, { duration: 0.3, width: 60, height: 60, opacity: 1 });
						});
					}
				}
			});

			// Cursor drag on mouse down / click and hold effect (class "cursor-drag-mouse-down"). For Swiper sliders.
			$(".swiper").each(function () {
				if ($(this).parent().attr("data-simulate-touch") === "true") {
					if ($(this).parent().hasClass("cursor-drag-mouse-down")) {
						$(this).on("mousedown pointerdown", function (e) {
							if (e.which === 1) { // Affects the left mouse button only!
								gsap.to($ball, { duration: 0.2, width: 60, height: 60, opacity: 1 });
								$ball.append('<div class="ball-drag"></div>');
							}
						}).on("mouseup pointerup", function () {
							$ball.find(".ball-drag").remove();
							if ($(this).find("[data-cursor]:hover").length) {
							} else {
								gsap.to($ball, { duration: 0.2, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
							}
						}).on("mouseleave", function () {
							$ball.find(".ball-drag").remove();
							gsap.to($ball, { duration: 0.2, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
						});

						// Ignore "data-cursor" on mousedown.
						$(this).find("[data-cursor]").on("mousedown pointerdown", function () {
							return false;
						});

						// Ignore "data-cursor" on hover.
						$(this).find("[data-cursor]").on("mouseenter mouseover", function () {
							$ball.find(".ball-drag").remove();
							return false;
						});
					}
				}
			});

			// Cursor close on hover.
			$(".cursor-close").each(function () {
				$(this).addClass("ball-close-enabled");
				$(this).on("mouseenter", function () {
					$ball.addClass("ball-close-enabled");
					$ball.append('<div class="ball-close">Close</div>');
					gsap.to($ball, { duration: 0.3, yPercent: -75, width: 80, height: 80, opacity: 1 });
					gsap.from(".ball-close", { duration: 0.3, scale: 0, autoAlpha: 0 });
				}).on("mouseleave click", function () {
					$ball.removeClass("ball-close-enabled");
					gsap.to($ball, { duration: 0.3, yPercent: -50, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
					$ball.find(".ball-close").remove();
				});

				// Hover on "cursor-close" inner elements.
				$(".cursor-close a, .cursor-close button, .cursor-close .tt-btn, .cursor-close .hide-cursor")
					.not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
					.on("mouseenter", function () {
						$ball.removeClass("ball-close-enabled");
					}).on("mouseleave", function () {
						$ball.addClass("ball-close-enabled");
					});
			});

			// Blog interactive title link hover.
			$(".blog-interactive-item").each(function () {
				var $biItem = $(this);
				if ($biItem.find(".bi-item-image").length) {
					$biItem.find(".bi-item-title a").on("mouseenter mouseover", function () {
						$("#magic-cursor").addClass("blog-interactive-hover-on");
						$biItem.find(".bi-item-image").appendTo($ball);
						gsap.to($ball, { duration: 0.3, width: "20vw", height: "20vw", opacity: 1 });
					}).on("mouseleave", function () {
						$("#magic-cursor").removeClass("blog-interactive-hover-on");
						$ball.find(".bi-item-image").appendTo($biItem);
						gsap.to($ball, { duration: 0.3, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
					});
					$biItem.find(".bi-item-title a").addClass("not-hide-cursor");
					$biItem.addClass("bi-item-image-on");
				}
			});

			// ================================================================
			// Scroll between anchors 
			// ================================================================

			$('a[href^="#"]')
				.not('[href$="#"]') // omit from selection
				.not('[href$="#0"]') // omit from selection
				.on("click", function () {

					var target = this.hash;

					// If fixed header position enabled.
					if ($("#tt-header").hasClass("tt-header-fixed")) {
						var $offset = $("#tt-header").height();
					} else {
						var $offset = 0;
					}

					// You can use data attribute (for example: data-offset="100") to set top offset in HTML markup if needed. 
					if ($(this).data("offset") != undefined) $offset = $(this).data("offset");

					if (!isMobile) { // Not for mobile devices!
						if ($("body").hasClass("tt-smooth-scroll")) {
							var topY = $(target).offset().top - $("#scroll-container > .scroll-content").offset().top - $offset;
							var $scrollbar = Scrollbar.init(document.getElementById("scroll-container"));
							gsap.to($scrollbar, { duration: 1.5, scrollTo: { y: topY, autoKill: true }, ease: Expo.easeInOut });

						} else {
							var topY = $(target).offset().top - $("body").offset().top - $offset;
							$("html,body").animate({ scrollTop: topY }, 800);
						}
					} else {
						var topY = $(target).offset().top - $("body").offset().top - $offset;
						$("html,body").animate({ scrollTop: topY }, 800);
					}
					return false;
				});



			// ================================================================
			// Scroll to top 
			// ================================================================

			$(".scroll-to-top").on("click", function () {
				if (!isMobile) { // Not for mobile devices!
					if ($("body").hasClass("tt-smooth-scroll")) {
						var $scrollbar = Scrollbar.init(document.getElementById("scroll-container"));
						gsap.to($scrollbar, { duration: 1.5, scrollTo: { y: 0, autoKill: true }, ease: Expo.easeInOut });
					} else {
						$("html,body").animate({ scrollTop: 0 }, 800);
					}
				} else {
					$("html,body").animate({ scrollTop: 0 }, 800);
				}
				return false;
			});



			// Show/hide magic cursor
			// =======================

			// Hide on hover.
			$("a, button, .tt-btn, .tt-form-control, .tt-form-radio, .tt-form-check, .hide-cursor") // class "hide-cursor" is for global use.
				.not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
				.not(".cursor-alter") // omit from selection
				.not(".tt-main-menu-list > li > a") // omit from selection
				.not(".tt-main-menu-list > li > .tt-submenu-trigger > a") // omit from selection
				.on("mouseenter", function () {
					gsap.to($ball, { duration: 0.3, scale: 0, opacity: 0 });
				}).on("mouseleave", function () {
					gsap.to($ball, { duration: 0.3, scale: 1, opacity: $ballOpacity });
				});

			// Hide on click.
			$("a")
				.not('[target="_blank"]') // omit from selection.
				.not('[href^="#"]') // omit from selection.
				.not('[href^="mailto"]') // omit from selection.
				.not('[href^="tel"]') // omit from selection.
				.not(".lg-trigger") // omit from selection.
				.not(".tt-btn-disabled") // omit from selection.
				.on('click', function () {
					gsap.to($ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
				});

			// Show/hide on document leave/enter.
			$(document).on("mouseleave", function () {
				gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 0 });
			}).on("mouseenter", function () {
				gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
			});

			// Show as the mouse moves.
			$(document).mousemove(function () {
				gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
			});
		}
	}

// Services slider
var swiper = new Swiper(".services-slider", {
	loop: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	speed: 2000,
	// autoplay: {
	// 	delay: 1500,
	// },
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
var swiper = new Swiper(".our-patner-slider", {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 0,
	slidesPerView: 5,
	speed: 5000,
	autoplay: {
		delay: 2000,
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
			slidesPerView: 3,
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

// Our Partner
var swiper = new Swiper(".about-img-slider", {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 20,
	slidesPerView: 1,
	effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	speed: 3000,
	autoplay: {
		delay: 1500,
	},
	pagination: {
		el: ".about-img-paginnation",
		clickable: 'true',
	  },
});

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

// banner-image-pagination-slider
var swiper = new Swiper(".banner-pagination-small-image	", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".banner-pagination-image-slider", {
	spaceBetween: 10,
	// autoplay: true,
	effect: 'fade',
    speed: 1000,
	fadeEffect: {
		crossFade: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	thumbs: {
	  swiper: swiper,
	},
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
  

// fancybox
$("a.portfolio-img").fancybox();



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
