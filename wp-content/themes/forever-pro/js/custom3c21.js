jQuery(document).ready( function(){
	//var ww = jQuery(window).width();	
		//jQuery("area[rel^='prettyPhoto']").prettyPhoto();
	//jQuery(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false});
	//jQuery(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
	//jQuery("#custom_content a[rel^='prettyPhoto']:first").prettyPhoto({
		//custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		//changepicturecallback: function(){ initialize(); }
	//});
	//jQuery("#custom_content a[rel^='prettyPhoto']:last").prettyPhoto({
		//custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
		//changepicturecallback: function(){ _bsap.exec(); }
	//});

	// accordion
    jQuery('.accordion-box .acc-content').hide();
    jQuery('.accordion-box h2:first').addClass('active').next().show();
    jQuery('.accordion-box h2').click(function(){
        if( jQuery(this).next().is(':hidden') ) {
            jQuery('.accordion-box h2').removeClass('active').next().slideUp();
            jQuery(this).toggleClass('active').next().slideDown();
        }
        return false; // Prevent the browser jump to the link anchor
    });
	
	// Tabs
	jQuery('ul.tabs > br').remove();
	jQuery('.tabs-wrapper').append(jQuery('.tabs li div'));
	jQuery('.tabs li:first a').addClass('defaulttab selected');
	jQuery('.tabs a').click(function(){
		switch_tabs(jQuery(this));
	});
	switch_tabs(jQuery('.defaulttab'));
	function switch_tabs(obj) {
		jQuery('.tab-content').hide();
		jQuery('.tabs a').removeClass("selected");
		var id = obj.attr("rel");
		jQuery('#'+id).show();
		obj.addClass("selected");
	}

	// Content Toggle
    jQuery(".slide_toggle_content").hide();
    jQuery("h3.slide_toggle").toggle(function(){
	    jQuery(this).addClass("clicked");
	}, function () {
	    jQuery(this).removeClass("clicked");
    });
    jQuery("h3.slide_toggle").click(function(){
		jQuery(this).next(".slide_toggle_content").slideToggle();
    });

});

// NAVIGATION CALLBACK
var ww = jQuery(window).width();
jQuery(document).ready(function() { 
	jQuery(".sitenav li a").each(function() {
		if (jQuery(this).next().length > 0) {
			jQuery(this).addClass("parent");
		};
	})
	jQuery(".toggleMenu").click(function(e) { 
		e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery(".sitenav").slideToggle('fast');
	});
	adjustMenu();
})

// navigation orientation resize callbak
jQuery(window).bind('resize orientationchange', function() {
	ww = jQuery(window).width();
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 981) {
		jQuery(".toggleMenu").css("display", "block");
		if (!jQuery(".toggleMenu").hasClass("active")) {
			jQuery(".sitenav").hide();
		} else {
			jQuery(".sitenav").show();
		}
		jQuery(".sitenav li").unbind('mouseenter mouseleave');
	} else {
		jQuery(".toggleMenu").css("display", "none");
		jQuery(".sitenav").show();
		jQuery(".sitenav li").removeClass("hover");
		jQuery(".sitenav li a").unbind('click');
		jQuery(".sitenav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
			jQuery(this).toggleClass('hover');
		});
	}
}

jQuery(document).ready(function () {
	jQuery(this).find('.sitenav li ul').parent().addClass('has-sub');
	jQuery(this).find(".has-sub").prepend('<span class="submenu-button"></span>');
	jQuery(this).find('.submenu-button').on('click', function() {
	jQuery(this).toggleClass('submenu-opened');
		if (jQuery(this).siblings('ul').hasClass('open')) {
		 jQuery(this).siblings('ul').removeClass('open').slideToggle();
		}
		else {
		 jQuery(this).siblings('ul').addClass('open').slideToggle();
		}
	});
	if (jQuery( window ).width() > 980 ) {
       jQuery(this).find('ul li ul').show();
     }	
     if (jQuery(window).width() <= 980 ) {
       jQuery(this).find('ul li ul').hide();
     }
});


jQuery(document).ready(function() {
	jQuery('.srchicon').click(function() {
		jQuery('.searchtop').slideToggle('slow');		
	});	
});

// skill bar script
jQuery(document).ready(function() {
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

jQuery(document).ready(function(){
	// hide #back-top first
	jQuery("#back-top").hide();	
	// fade in #back-top
	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 50) {
				jQuery('#back-top').fadeIn();
			} else {
				jQuery('#back-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		jQuery('#back-top').click(function () {
			jQuery('body,html').animate({
				scrollTop: 00
			}, 800);
			return false;
		});
	});

});


//Counter jquery
jQuery(document).ready(function(  ) {
        jQuery('.counter').counterUp({
            delay: 10,
            time: 2000
   });
});

// Remove empty p tag
jQuery(document).ready( function() {
  jQuery('p:empty').remove();
});

//Fancybox
jQuery(document).ready(function(){
	jQuery('[data-fancybox]').fancybox({
		loop : true,
		protect: true,
		thumbs : {
			autoStart   : true,                  // Display thumbnails on opening
			hideOnClose : true,                   // Hide thumbnail grid when closing animation starts
			parentEl    : '.fancybox-container',  // Container is injected into this element
			axis        : 'y'                     // Vertical (y) or horizontal (x) scrolling
		},
		transitionEffect : "circular",
		transitionDuration : 1000,
	});
});

// Testimonials
jQuery(document).ready(function(){
	var owl = jQuery('.clienttestiminials');
  	owl.owlCarousel({
		items:1,
		margin: 0,
		loop: true,
		nav: false,	
		dots: false,
	})
});

// Testimonials sidebar rotator
jQuery(document).ready(function(){
	var owl1 = jQuery('.quotes');
  	owl1.owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: true,	
	})
});

// Client Logo Rotator
jQuery(document).ready(function(){
	var owl2 = jQuery('.partners');
  	owl2.owlCarousel({
		items: 5,
		margin: 50,
		nav: false,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: true,
		responsive:{
			0: {
				items: 2,
				nav: true
			},
			768: {
				items: 3,
				nav: false
			},
			1170: {
				items: 5,
				nav: false
			},
		}		
	})
});

//Image Carousel
jQuery(document).ready(function() {
	jQuery('#car-gallery').lightSlider({
		gallery:true,
		item:1,
		thumbItem:5,
		slideMargin: 0,
		speed:200,
		auto:false,
		loop:true,
		onSliderLoad: function() {
			jQuery('#car-gallery').removeClass('cS-hidden');
		}  
	});
});