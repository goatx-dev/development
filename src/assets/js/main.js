
/*
Author       : Theme-Family
Template Name: Enricher -  Bitcoin & Cryptocurrency Landing Page HTML Template
Version      : 1.0
*/


(function($) {
    "use strict";
	
	jQuery(document).on('ready', function(){
		
		
		/*PRELOADER JS*/
		
        $('#atf-loader').fadeOut(); // will first fade out the loading animation
        $('#atf-preloader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		
        $('body').delay(350).css({'overflow':'visible'});
		
		/*END PRELOADER JS*/
		
		// Navbar menu-top
			var nav = $('nav');
			var navHeight = nav.outerHeight();

			$('.navbar-toggler').on('click', function () {
				if (!$('#menu-top').hasClass('navbar-collaps')) {
					$('#menu-top').addClass('navbar-collaps');
				}
			});		

		// Navbar Menu Reduce 
	
			$(window).trigger('scroll');
			$(window).on('scroll', function () {
				var pixels = 50;
				var top = 1200;
				if ($(window).scrollTop() > pixels) {
					$('.navbar-expand-md').addClass('navbar-collaps');
					$('.navbar-expand-md').removeClass('navbar-expend');
				} else {
					$('.navbar-expand-md').addClass('navbar-expend');
					$('.navbar-expand-md').removeClass('navbar-collaps');
				}
				if ($(window).scrollTop() > top) {
					$('.scrolltop-atf').fadeIn(1000, "easeInOutExpo");
				} else {
					$('.scrolltop-atf').fadeOut(1000, "easeInOutExpo");
				}
			});


		//  Star Scrolling nav
		$('a.page-scroll[href*="#"]:not([href="#"])').on("click", function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: (target.offset().top - navHeight + 30)
					}, 1000, "easeInOutExpo");
					return false;
				}
			}
		});

		// Closes responsive menu when a scroll trigger link is clicked
		
		$('.page-scroll').on("click", function () {
			$('.navbar-collapse').collapse('hide');
		});

		// Activate scrollspy to add active class to navbar items on scroll
		$('body').scrollspy({
			target: '#menu-top',
			offset: navHeight
		});
        

		  //**================= Sticky =====================**//
  
		  $(window).on('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$('.navbar-expand-md').addClass('navbar-collaps');
				$('.atf-back-to-top').addClass('open');
			} else {
				$('.atf-header-area').removeClass('navbar-collaps');
				$('.atf-back-to-top').removeClass('open');
			}
		  });
		  
		//**===================Scroll UP ===================**//

			if ($('.atf-back-to-top').length) {
			  $(".atf-back-to-top").on('click', function () {
				var target = $(this).attr('data-targets');
				// animate
				$('html, body').animate({
				  scrollTop: $(target).offset().top
				}, 1000);

			  });
			}
			
			
			// ------------------------ Market Rate Slider
				var mSlider = $ ("#atf-market-rate");
				if(mSlider.length) {
					mSlider.owlCarousel({
					  loop:true,
					  nav:false,
					  dots:false,
					  margin:20,
					  autoplay:true,
					  autoplayTimeout:1000,
					  smartSpeed:1200,
					  autoplayHoverPause:true,
					  lazyLoad:true,
					  responsive:{
							0:{
								items:1
							},
							500:{
								items:1
							},
							992:{
								items:3
							},
							1300:{
								items:3,
							}
						},
				  })
				}
// ------------------------END Market Rate Slider

			/*START PARTNER LOGO*/
			$('.atf-brand-active').owlCarousel({
				margin:10,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:5
					}
				}
			})
			/*END PARTNER LOGO*/
			
			
			
			
		
			// Odometer JS
			$('.odometer').appear(function() {
				var odo = $(".odometer");
				odo.each(function() {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});
			
			//  POPUP VIDEO
			$('.popup-video').magnificPopup({
				type: 'iframe',
			});

			// ------------------ Magnific Popup ----------------// 

			var magnifPopup = function() {
				$('.atf-popup-img').magnificPopup({
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
		
			/*START Testimonials LOGO*/
			$("#testimonial-slider").owlCarousel({
				margin:3,
				nav:false,
				loop:true,
				dots:true,
				responsive:{
					0:{
						items:1
					},
					768:{
						items:1
					},
					1000:{
						items:2
					}
				}
			});
			
		/*END Testimonials LOGO*/
		
			
		// mailchamp
		$('#mc-form').ajaxChimp({
			url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
			/* Replace Your AjaxChimp Subscription Link */
		}); 
		

    }); 
    
})(jQuery);

