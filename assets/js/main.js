/*******************************************************
    Template Name    : Liam - Personal Portfolio Landing Page Template
*******************************************************/
(function($) {
	"use strict";
	
	var nav = $('nav');
	var navHeight = nav.outerHeight();
	$('.navbar-toggler').on('click', function() {
		if(!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	});
	
	// START PRELOADED
	$(window).on('load', function () {
		$('.loader').delay(500).fadeOut('slow');
	});
	
	// Porfolio isotope and filter
	$(window).on('load', function() {
		var projectIsotope = $('.project-container').isotope({
			itemSelector: '.project-grid-item'
		});
		$('#project-flters li').on('click', function() {
			$("#project-flters li").removeClass('filter-active');
			$(this).addClass('filter-active');
			projectIsotope.isotope({
				filter: $(this).data('filter')
			});
		});
	});
	
	// Navbar Menu Reduce 
	$(window).trigger('scroll');
	$(window).on('scroll', function() {
		var pixels = 50;
		var top = 1200;
		if($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});
	
	// Back to top button 
	$(window).on("scroll", function() {
		if($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').on("click", function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});
	
	//  Star ScrollTop
	$('.scrolltop-mf').on("click", function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
	
	//  Star Scrolling nav
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 30)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
	
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function() {
		$('.navbar-collapse').collapse('hide');
	});
	
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	
	// HOME TYPED JS
	if($('.element').length) {
		$('.element').each(function() {
			$(this).typed({
				strings: [$(this).data('text1'), $(this).data('text2'), $(this).data('text3')],
				loop: $(this).data('loop') ? $(this).data('loop') : false,
				backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000,
				typeSpeed: 10,
			});
		});
	}
    
    // Progress Bar
    $(window).on('scroll', function () {
        $(".skill-progress .skill-progress-bar").each(function () {
            var bottom_object = $(this).offset().top + $(this).outerHeight();
            var bottom_window = $(window).scrollTop() + $(window).height();
            var progressWidth = $(this).attr('aria-valuenow') + '%';
            if (bottom_window > bottom_object) {
                $(this).css({
                    width: progressWidth
                });
            }
        });
    });
	
	// Service owl
	$('#service-slide').owlCarousel({
		margin: 30,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 1000,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});
	
	// Testimonials owl
	$('#testimonial-slide').owlCarousel({
		margin: 15,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 1000,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	});
	
	//  MagnificPopup
	var magnifPopup = function() {
		$('.popup-img').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it
				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function
				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};
	// Call the functions
	magnifPopup();
	
	/*START CONTACT MAP JS*/
			if ($('.map-canvas').length) {
				// Specify features and elements to define styles.
				var styles = [{
								"featureType": "administrative.country",
								"elementType": "geometry",
								"stylers": [
									{
										"visibility": "simplified"
									},
									{
										"hue": "#ff0000"
									}
								]
							}
						];

				var mapOptions = {
					center: new google.maps.LatLng(51.04688064180862, -114.06965021742546),
					zoom: 12,
					scrollwheel: false,
					panControl: true,
					mapTypeControl: false,
					streetViewControl: false,
					disableDefaultUI: false,
					zoomControl: true,
					disableDoubleClickZoom: false,
					fullscreenControl: false,
					styles: styles
				};
				var initMap = function() {
					var contactdata = $('#contact-map').data('content');
					var map = new google.maps.Map(document.getElementById("contact-map"), mapOptions);
					var bounds = new google.maps.LatLngBounds();
					var myIcon = new google.maps.MarkerImage("assets/img/map_pin.png", null, null, null, new google.maps.Size(50, 52));
					var marker = new google.maps.Marker({
						position: new google.maps.LatLng(51.04688064180862, -114.06965021742546),
						map: map,
						icon: myIcon
					});



				};
				initMap();
				google.maps.event.addDomListener(window, 'load resize', initMap);
			}

	   /*END CONTACT MAP JS*/
	
})(jQuery);