jQuery(document).ready(function () {
	"use strict";
	timelineResponsive();
	ready();
	itemPageFull();
	scrollAction();
	fullSlider();
	skillsGraphics()
});
jQuery(window).resize(function () {
	"use strict";
	itemPageFull();
	timelineResponsive();
	fullSlider();
	scrollAction();
});
jQuery(window).scroll(function () {
	"use strict";
	timelineScrollFix();
	scrollAction();
	skillsGraphics();
});

function ready() {
	"use strict";
	//UI
	jQuery('.widgetTabs').tabs({
		show: {
			effect: 'drop',
			direction: 'right',
			duration: 500
		},
		hide: {
			effect: 'drop',
			direction: 'left',
			duration: 500
		},
		activate: function (event, ui) {
			ui.newPanel.find('.retinaZoom').each(function () {
				"use strict";
				initZoom(jQuery(this).attr('id'));
			});
		}
	});

	jQuery('.sc_tabs').tabs({
		show: {
			effect: 'fade',
			duration: 250
		},
		hide: {
			effect: 'fade',
			duration: 200
		},
		activate: function (event, ui) {
			ui.newPanel.find('.retinaZoom').each(function () {
				"use strict";
				initZoom(jQuery(this).attr('id'));
			});
			ui.newPanel.find('.scroll').each(function () {
				"use strict";
				initScroll(jQuery(this).attr('id'));
			});
		}
	});

	//shortcode Accordion
	if (jQuery('.sc_accordion').length > 0) {
		jQuery(".sc_accordion").accordion({
			header: "> .sc_accordion_item > .sc_accordion_title",
			create: function (event, ui) {
				ui.header.each(function () {
					"use strict";
					jQuery(this).parent().addClass('sc_active');
				});
			},
			activate: function (event, ui) {
				ui.newHeader.each(function () {
					"use strict";
					jQuery(this).parent().addClass('sc_active');
				});
				ui.oldHeader.each(function () {
					"use strict";
					jQuery(this).parent().removeClass('sc_active');
				});
			}
		});
	}
	//shortcode toggle
	if (jQuery('.sc_toggle').length > 0) {
		jQuery('body').on('click', '.sc_toggle .sc_toggles_title', function(e) {
			"use strict";
			jQuery(this).parent().toggleClass('sc_active');
			jQuery(this).parent().find('.sc_toggles_content ').slideToggle();
		});
	}

	//shortcode tooltip
	jQuery('body').on('hover', '.sc_tooltip_parent', function(e){
			"use strict";
			var obj = jQuery(this);
			obj.find('.sc_tooltip').stop().animate({
				'marginTop': '5'
			}, 100).show();
		},
		function () {
			"use strict";
			var obj = jQuery(this);
			obj.find('.sc_tooltip').stop().animate({
				'marginTop': '0'
			}, 100).hide();
		});

	//textarea Autosize
	jQuery('textarea.textAreaSize').autosize({
		append: "\n"
	});

	//retinaExample
	if (jQuery('.retinaZoom').length > 0) {
		jQuery('.retinaZoom').each(function () {
			"use strict";
			var zoomId = jQuery(this).attr('id');
			initZoom(zoomId);
		});
	}

	function initZoom(id) {
		"use strict";
		if (jQuery('#' + id).hasClass('zoomInit') == false) {
			jQuery('#' + id).addClass('zoomInit').elevateZoom({
				zoomType: "lens",
				lensShape: "round",
				lensSize: 200
			});
		}
	}

	//custom scroll
	if (jQuery('.scroll').length > 0) {
		initScroll('scroll-1');
		initScroll('scroll-timeLine-1');
	}

	
	//audio
	if (jQuery('audio').length > 0) {
		jQuery('audio').mediaelementplayer();
	}

	//share But
	jQuery(document).click(function () {
		"use strict";
		jQuery('ul.shareDrop').slideUp();
		jQuery('a.shareDrop').removeClass('selected')
	});
	jQuery('body').on('click', 'ul.shareDrop', function(e) {
		"use strict";
		e.stopPropagation();
	});
	jQuery('body').on('click', 'li.share', function(e) {
		"use strict";
		e.stopPropagation();
		jQuery(this).find('ul.shareDrop').slideDown();
		jQuery(this).find('a.shareDrop').addClass('selected')
	});

	//isotope
	if (jQuery('.isotopeNOamin, .isotope, .isotopeFull').length > 0) {

		var elementIsotopWidth = jQuery('.isotope, .isotopeNOamin').width() / jQuery('.isotope, .isotopeNOamin').data('columns');
		jQuery('.isotope, .isotopeNOamin').find('.isotopeElement').css('width', elementIsotopWidth).fadeIn();

		//isotope
		jQuery('.isotope, .isotopeNOamin').isotope({
			resizable: false,
			masonry: {
				columnWidth: Math.floor(jQuery('.isotope').width() / Math.floor(jQuery('.isotope').width() / elementIsotopWidth))
			},
			itemSelector: '.isotopeElement',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});

		jQuery(window).smartresize(function () {
			"use strict";
			jQuery('.isotope, .isotopeNOamin').find('.isotopeElement').css('width', Math.floor(jQuery('.isotope, .isotopeNOamin').width() / Math.floor(jQuery('.isotope, .isotopeNOamin').width() / elementIsotopWidth)));
			jQuery('.isotope, .isotopeNOamin').isotope({
				masonry: {
					columnWidth: Math.floor(jQuery('.isotope, .isotopeNOamin').width() / Math.floor(jQuery('.isotope').width() / elementIsotopWidth))
				}
			});
		});


		//isotopeFull portfolio	
		var elementIsotop = 340;
		jQuery('.isotopeFull').find('.isotopeElement').css('width', Math.floor(jQuery('.isotopeFull').width() / Math.floor(jQuery('.isotopeFull').width() / 	elementIsotop)));
		jQuery('.isotopeFull').isotope({
			resizable: false,
			masonry: {
				columnWidth: Math.floor(jQuery('.isotopeFull').width() / Math.floor(jQuery('.isotopeFull').width() / elementIsotop))
			},
			itemSelector: '.isotopeElement',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		jQuery(window).smartresize(function () {
			"use strict";
			jQuery('.isotopeFull').find('.isotopeElement').css('width', Math.floor(jQuery('.isotopeFull').width() / Math.floor(jQuery('.isotopeFull').width()	 / elementIsotop)));
			jQuery('.isotopeFull').isotope({
				masonry: {
					columnWidth: Math.floor(jQuery('.isotopeFull').width() / Math.floor(jQuery('.isotopeFull').width() / elementIsotop))
				}
			});

		});
		

	}

	//isotopefiltre
	jQuery('body').on('click', '.isotopeFiltr li a', function(e) {
		"use strict";
		jQuery('.isotopeFiltr li').removeClass('active');
		jQuery(this).parent().addClass('active');

		var selector = jQuery(this).attr('data-filter');
		jQuery('.isotope').isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});



	//Slider (prev) (next)
	if (jQuery('#sliderNavFocus').length > 0) {

			jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
			jQuery('#sliderNavFocus').royalSlider({
				arrowsNav: true,
				arrowsNavAutoHide: false,
				fadeinLoadedSlide: false,
				controlNavigationSpacing: 0,
				controlNavigation: false,
				imageScaleMode: 'none',
				imageAlignCenter: false,
				blockLoop: true,
				loop: true,
				numImagesToPreload: 6,
				transitionType: 'slide',
				keyboardNavEnabled: true,
				block: {
					delay: 400
				}

			});

	}
	//slider Logo
	if (jQuery('#sliderNavlogo').length > 0) {
		jQuery('#sliderNavlogo').elastislide({

		});
	}

	//Auto slider NAV
	if (jQuery('.sliderNav').length > 0) {

			jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

			jQuery('.sliderNav').slideDown().royalSlider({
				autoHeight: true,
				arrowsNav: true,
				arrowsNavAutoHide: false,
				fadeinLoadedSlide: false,
				controlNavigationSpacing: 0,
				controlNavigation: false,
				imageScaleMode: 'none',
				imageAlignCenter: false,
				blockLoop: true,
				loop: true,
				numImagesToPreload: 6,
				transitionType: 'slide',
				keyboardNavEnabled: true,
				block: {
					delay: 400
				},
				autoPlay: {
					delay: 10000,
					enabled: true,
					pauseOnHover: true
				}
			});
	}


	//Slider (Navigation)
		jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
		jQuery('.sliderBullets, .sliderHomeBullets').slideDown(200, function () {
			REX_parallax()
		}).royalSlider({
			autoHeight: true,
			arrowsNav: false,
			arrowsNavAutoHide: false,
			fadeinLoadedSlide: false,
			controlNavigationSpacing: 0,
			controlNavigation: 'bullets',
			imageScaleMode: 'none',
			imageAlignCenter: false,
			blockLoop: true,
			loop: true,
			numImagesToPreload: 6,
			transitionType: 'slide',
			keyboardNavEnabled: true,
			block: {
				delay: 400
			},
			autoPlay: {
				delay: 7000,
				enabled: true,
				pauseOnHover: true
			}

		});


		//fullScreen effect
		jQuery(".sliderHomeBullets").find('.rsContent:first').addClass('sliderBGanima ' + jQuery(".sliderHomeBullets").find('.rsContent:first').data('effect'));
		if (jQuery(".sliderHomeBullets").length > 0) {
			var sliderAnim = jQuery(".sliderHomeBullets").data('royalSlider');
			sliderAnim.ev.on('rsBeforeAnimStart', function (event) {

				REX_parallax();

				var slideIndex = this.currSlideId;
				var slideContent = jQuery(".sliderHomeBullets").find('.rsContent');
				var dataEffectSlide = slideContent.eq(slideIndex).data('effect');

				//removeClassAnimation
				slideContent.each(function () {
					"use strict";
					jQuery(this).removeClass(jQuery(this).data('effect'))
				});

				jQuery(".sliderHomeBullets").find('.rsContent').removeClass('sliderBGanima ' + dataEffectSlide);
				jQuery(".sliderHomeBullets").find('.rsContent').eq(slideIndex).addClass('sliderBGanima ' + dataEffectSlide);
			});
		}


	//videoFrame
	jQuery('body').on('click', '.videoFrame', function(e) {
		"use strict";
		var frame_height = jQuery(this).width() / 16 * 9;
		var frame_code = jQuery(this).attr('data-frame');
		jQuery(this).removeClass('videoPlay');
		jQuery(this).html('<iframe width="100%" height="' + frame_height + 'px" class="video_frame" src="' + frame_code + '?autoplay=1"  frameborder="0" webkitAllowFullScreen="webkitAllowFullScreen" mozallowfullscreen="mozallowfullscreen" allowFullScreen="allowFullScreen"></iframe>');
		e.stopImmediatePropagation();
		e.preventDefault();
		return false;
	});


	/*page Lib*/
	jQuery(document).click(function () {
		"use strict";
		jQuery('.pageFocusBlock').slideUp();
	});
	jQuery('body').on('click', '.pageFocusBlock', function(e) {
		"use strict";
		e.stopPropagation();
	});
	jQuery('body').on('click', '.navInput', function(e) {
		"use strict";
		e.stopPropagation();
		jQuery('.pageFocusBlock').slideDown();
	});


	/*category menu*/
	jQuery(document).click(function () {
		"use strict";
		jQuery('.widgetBody > ul > li.dropMenu > ul').slideUp();
		jQuery('.widgetBody > ul > li.dropMenu ').removeClass('dropOpen');
	});
	jQuery('body').on('click', '.widgetBody > ul > li.dropMenu > ul', function(e) {
		"use strict";
		e.stopPropagation();
	});
	jQuery('body').on('click', '.widgetBody > ul > li.dropMenu', function(e) {
		"use strict";
		e.stopPropagation();
		jQuery(this).toggleClass('dropOpen');
		jQuery(this).find('ul').first().slideToggle();
	});

	/*search*/
	jQuery(document).click(function () {
		"use strict";
		jQuery('.topGlobal .search .searhForm').hide('slide', {
			direction: 'left'
		}, 200);
		jQuery('.ajaxSeacrh').slideUp();
		jQuery('header').removeClass('topSearchShow');
		jQuery('.topGlobal .search').removeClass('searchOpen');
	});
	jQuery('body').on('click', '.topGlobal .search .searhForm', function(e) {
		"use strict";
		e.stopPropagation();
	});
	jQuery('body').on('click', '.topGlobal .search', function(e) {
		"use strict";
		e.stopPropagation();
		jQuery('header').addClass('topSearchShow')
		jQuery(this).toggleClass('searchOpen');
		jQuery('.ajaxSeacrh').delay(300).slideToggle();
		jQuery(this).find('.searhForm').toggle('slide',{direction: 'left'}, 300)
	});


	/*seacrh 404*/
	jQuery(document).click(function () {
		"use strict";
		jQuery('.inputSubmitAnimatiot').animate({
			width: 50
		}).removeClass('sFocus rad4').addClass('radCircle', 100);
		jQuery('.inputSubmitAnimatiot .sInput').hide();
	});
	jQuery('body').on('click', '.inputSubmitAnimatiot', function(e) {
		"use strict";
		e.stopPropagation();
	});
	jQuery('body').on('click', '.inputSubmitAnimatiot', function(e) {
		"use strict";
		e.stopPropagation();
		jQuery(this).toggleClass('sFocus');
		jQuery(this).animate({
			width: 480
		}).addClass('rad4').removeClass('radCircle');
		jQuery(this).find('.sInput').delay(300).slideDown(300);
	});


    /*userMenu DROP*/
    jQuery('.userMenu ul.dropUsMenu').superfish({
        delay: 500,
        animation: {
            opacity: 'show',
            height: 'show'
        },
        speed: 'fast',
        autoArrows: false,
        dropShadows: false
    });


    /*topMenu DROP*/
    function menuAction(){
        if ( jQuery(window).width() > 990){
            jQuery('header .menuTopWrap').show();
            jQuery('.menuTopWrap ul').superfish({
                delay: 500,
                animation: {
                    opacity: 'show',
                    height: 'show'
                },
                speed: 'fast',
                autoArrows: false,
                dropShadows: false
            });
        } else {
            jQuery('.menuTopWrap ul').superfish('destroy');
            jQuery('header .menuTopWrap').hide();
            if(!jQuery('.menuTopWrap ul').hasClass('destroy')){
                jQuery('.menuTopWrap ul').addClass('destroy');
                    jQuery('.menuTopWrap ul li a').click(function(e) {
                         "use strict";
                         if (jQuery(this).parent().hasClass('dropMenu')) {
                            if (jQuery(this).siblings('ul:visible').length > 0){
                                jQuery(this).siblings('ul').slideUp();
                            }
                            else {
                                jQuery(this).siblings('ul').slideDown();
                            }
                            return false;
                         }
                    });
            }
        }
    }

    menuAction();

    jQuery(window).resize(function () {
        "use strict";
        menuAction();
    });


	/*Sweep menu DROP*/
	jQuery('body').on('click', '.sweepMenu > ul > li.dropMenu', function(e) {
		"use strict";
		e.stopPropagation();
	});
	jQuery('body').on('click', '.sweepMenu > ul > li.dropMenu, .sweepMenu > ul > li.dropMenu li', function(e) {
		"use strict";
		initScroll('scrollSweepMenu');
		e.stopPropagation();
		jQuery(this).toggleClass('dropOpen');
		jQuery(this).find('ul').first().slideToggle();
	});

	jQuery('body').on('click', '#scrollSweepMenu a', function(e) {
		"use strict";
		initScroll('scrollSweepMenu');
		jQuery('#scrollSweepMenu').mCustomScrollbar("update");
	});
	//////
	jQuery(document).click(function (e) {
		"use strict";
		jQuery('body').removeClass('openMenuFixRight openMenuFix');
		jQuery('.sweepMenuOverflow').fadeOut(400);
		jQuery('body').attr('style', '');;

	});
	jQuery('body').on('click', '.sweepMenuWrap.swpLeftPos, .swpRightPos, .openRightMenu', function(e) {
		"use strict";
		e.stopPropagation();
	});

	jQuery('body').on('click', '.sweepMenuWrap .sweepMenuDefault', function(e) {
		"use strict";
		jQuery('body').addClass('openMenuFix');
		if (jQuery('.sweepMenuOverflow').length > 0) {
			
		} else {
			jQuery('body').append('<div class="sweepMenuOverflow"></div>')
		}
		jQuery('.sweepMenuOverflow').fadeIn(400);
		jQuery('body').css('overflow','hidden');
	});

	jQuery('body').on('click', '.openRightMenu', function(e) {
		"use strict";
		jQuery('body').addClass('openMenuFixRight');
		if (jQuery('.sweepMenuOverflow').length > 0) {} else {
			jQuery('body').append('<div class="sweepMenuOverflow"></div>')
		}
		jQuery('.sweepMenuOverflow').fadeIn(400);
		jQuery('body').css('overflow','hidden');
	});


	//Message	
	jQuery('body').on('click', '.sc_infobox.sc_infobox_closeable', function(e) {
		"use strict";
		jQuery(this).slideUp();
	});

	//Hover DIR
	jQuery(' .portfolio > .isotopeElement > .hoverdirShow').each(function () {
		"use strict";
		jQuery(this).hoverdir();
	});

    //hoverZoom img effect
    if (jQuery('.hoverIncrease:not(.inited)').length > 0) {
        jQuery('.hoverIncrease:not(.inited)')
            .addClass('inited')
            .each(function () {
                "use strict";
                var img = jQuery(this).data('image');
                if(!img){
                    img = jQuery(this).find('img').attr('src');
                }
                var title = jQuery(this).data('title');
                if (img) {
                    jQuery(this).append('<span class="hoverShadow"></span><a href="'+img+'" title="'+title+'"><span class="hoverIcon"></span></a>');
                }
            });
    }
    
	//Magnific-Popup
	jQuery("a[href$='jpg'],a[href$='jpeg'],a[href$='png'],a[href$='gif']").attr('rel', 'magnific');	//.toggleClass('magnific', true);
    jQuery("a[rel*='magnific']:not(.inited)")
        .addClass('inited')
        .magnificPopup({
            type: 'image',
            mainClass: 'mfp-img-mobile',
            closeOnContentClick: true,
            closeBtnInside: true,
            fixedContentPos: true,
            midClick: true,
            //removalDelay: 500,
            preloader: true,
            tLoading: 'Loading image #%curr% ...',
            gallery:{
                enabled: true
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                verticalFit: true
            }
        });

	//FlipClock
	if (jQuery('.flipClock').length > 0) {
		var clock;
		//var pastDate  = new Date('12 31, 2013');
		//var diff =  pastDate.getTime() / 1000  - new Date() / 1000;
		var pastDate = new Date()
		var diff = pastDate.getTime() / 1000 + (24 * 60 * 24 * 30) - new Date() / 1000;

		clock = jQuery('.flipClock').FlipClock(diff, {
			countdown: true,
			clockFace: 'DailyCounter'
		});
	}


	//skills animation init
	if (jQuery('.sc_skills_item').length > 0) {
		var scrollSkills = jQuery('.sc_skills_item').offset().top;
		var scrollPosition = jQuery(this).scrollTop() + jQuery(window).height();
		scroll_init1(scrollPosition,scrollSkills);
		jQuery(window).scroll(function scroll_init() {
			"use strict";
			scrollPosition = jQuery(this).scrollTop() + jQuery(window).height();
			if (scrollPosition > scrollSkills & !jQuery('.sc_skills_item').hasClass('rexCSinit')) {
				jQuery('.sc_skills_item').addClass('rexCSinit');
				scrollGoStart();
			}
		});

	}

	//Portfolio item Discription
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		jQuery('body').on('click', '.itemDiscriptionWrap', function(e) {
			"use strict";
			jQuery(this).toggleClass('discriptionShow');
			jQuery(this).find('.toggleDiscription').slideToggle();
		})
	} else {
		jQuery('body').on('hover', '.itemDiscriptionWrap', function(e){
			"use strict";
			jQuery(this).toggleClass('discriptionShow');
			jQuery(this).find('.toggleDiscription').slideToggle();
		})
	}


	// rading review
	jQuery('.ratingEdit').mousemove(function (e) {
		"use strict";
		var ratWidth = jQuery(this).width();
		var ratX = e.pageX - this.offsetLeft;
		console.log(e.pageX);
		ratPercent = Math.round(ratX / ratWidth * 100);
		if (ratX <= ratWidth) {
			jQuery(this).find('.ratBubble').css('left', ratPercent + '%').html(ratPercent + '%');
		}
	});
	jQuery('body').on('click', '.ratingEdit', function(e) {
		"use strict";
		var ratWidth = jQuery(this).width();
		var ratX = e.pageX - this.offsetLeft + 1;
		ratPercent = Math.round(ratX / ratWidth * 100);
		if (ratX <= ratWidth) {
			jQuery(this).find('.starHover').css('width', ratPercent + '%');
		}
	});


	jQuery('body').on('click', '.upToScroll', function(e) {
		"use strict";
		jQuery('html,body').animate({
			scrollTop: 0
		}, 'slow');
	});


	//popup Magnific-Popup-master
	jQuery('.open-popup-link').magnificPopup({
		type: 'inline',
		removalDelay: 500,
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = 'mfp-zoom-in';
			},
			open: function () {
				jQuery('html').css({
					overflow: 'visible',
					margin: 0
				})
			},
			close: function () {

			}
		},
		midClick: true
	});


	jQuery('.formList input[type="text"], .formList input[type="password"]').focus(function () {
		"use strict";
		jQuery(this).attr('data-placeholder', jQuery(this).attr('placeholder')).attr('placeholder', '')
		jQuery(this).parent('li').addClass('iconFocus');
	}).blur(function () {
		"use strict";
		jQuery(this).attr('placeholder', jQuery(this).attr('data-placeholder'))
		jQuery(this).parent('li').removeClass('iconFocus');
	});

	//responsive Show menu
	jQuery('body').on('click', '.openResposoveMenu', function(e) {
		"use strict";
		jQuery('.menuTopWrap').slideToggle();
		e.preventDefault();
		return false;
	})

} //end ready


//skills animation init, count animation
function scrollGoStart() {
	"use strict";
	jQuery('.sc_skills_item').each(function () {
		"use strict";
		var totalStart = parseInt(jQuery(this).find('.sc_skills_count').text(),10);
		var totalStop = parseInt(jQuery(this).find('.sc_skills_count').data('stop'),10);
		var speedAnimation = parseInt(jQuery(this).find('.sc_skills_count').data('speed-animation'),10);
		var speedText = parseInt(jQuery(this).find('.sc_skills_count').data('speed'),10);
		var obj = jQuery(this).find('.sc_skills_total');
		var step = parseInt(jQuery(this).find('.sc_skills_count').data('step'),10) > 0 ? parseInt(jQuery(this).find('.sc_skills_count').data('step'),10) : 1;

		jQuery(this).find('.SCwidth').css('width', totalStart + '%').animate({
			width: totalStop + '%'
		}, speedAnimation);
		jQuery(this).find('.SCheight').css('height', totalStart + '%').animate({
			height: totalStop + '%'
		}, speedAnimation);

		if (totalStop < 12) {
			jQuery(this).find('.sc_skills_total').addClass('totalRight')
		}
		counter(totalStart, totalStop, speedText, step, obj);
	})

	//skills animation
	function counter(totalStart, totalStop, speedText, step, obj) {
		"use strict";
		obj.text(totalStart);
		totalStart = totalStart < totalStop ? Math.min(totalStop, totalStart + step) : totalStart + 1;
		if (totalStart <= totalStop)
			setTimeout(function () {
				"use strict";
				counter(totalStart, totalStop, speedText, step, obj);
			}, speedText);
	}
}
function scroll_init1(scrollPosition,scrollSkills) {
	"use strict";
	if (scrollPosition > scrollSkills & !jQuery('.sc_skills_item').hasClass('rexCSinit')) {
	jQuery('.sc_skills_item').addClass('rexCSinit');
	scrollGoStart();
	}
}

//skills graphics init
function skillsGraphics() {
	"use strict";

	var scrollSkills = jQuery('.sc_skills_graphics').length > 0 ? jQuery('.sc_skills_graphics').offset().top : 0;
	var scrollPosition = jQuery(this).scrollTop() + jQuery(window).height();

	if (!jQuery('.sc_skills_graphics').hasClass("graphicsInit") && jQuery('.sc_skills_graphics').length > 0 && scrollPosition > scrollSkills) {
		jQuery('.sc_skills_graphics').addClass('graphicsInit').each(function () {
			"use strict";
			var dataGrSpeed = jQuery(this).data('animationsteps');
			var dataGrValue = jQuery(this).data('grvalue');
			var dataGrColor = jQuery(this).data('grcolor');
			var dataGrgrSpeed = jQuery(this).data('grspeed');
			var dataGranimationEasing = jQuery(this).data('animationeasing');
			var dataGrId = jQuery(this).find('canvas').attr('id');

			jQuery(this).find('.sc_skills_graphics_percent').html(dataGrValue + '%');

			var options = {
				segmentShowStroke: true,
				segmentStrokeColor: "#fff",
				segmentStrokeWidth: 0,
				animationSteps: dataGrgrSpeed,
				animationEasing: dataGranimationEasing,
				animateRotate: true,
				animateScale: true,
			}

			var pieData = [{
				value: dataGrValue,
				color: dataGrColor
			}, {
				value: 100 - dataGrValue,
				color: "#E5F1FB"
			}];

			var myDoughnut = new Chart(document.getElementById(dataGrId).getContext("2d")).Pie(pieData, options);
		});
	}
}

//itemPageFull
function itemPageFull() {
	"use strict";
	var bodyHeight = jQuery(window).height();
	jQuery('.itemPageFull').css('height', bodyHeight - jQuery('.topWrap').height());
	jQuery('#scrollSweepMenu').css('height', bodyHeight);
}

//init scroll
function initScroll(idScroll) {
	"use strict";
	if (!jQuery('#' + idScroll).hasClass("scrollInit")) {
		jQuery('#' + idScroll).addClass('scrollInit').mCustomScrollbar({
			scrollButtons: {
				enable: false
			},
		});


		jQuery('body').on('click', '.scrollPositionAction > .roundButton', function(e) {
			"use strict";
			var scrollAction = jQuery(this).data('scroll');
			e.preventDefault();
			jQuery('#' + idScroll).mCustomScrollbar("scrollTo", scrollAction);
		});


	}
}

//scroll Action
function scrollAction() {
	"use strict";
	var buttonScrollTop = jQuery('.upToScroll');
	var scrollPositions = jQuery(window).scrollTop();
	var headHeight = jQuery(window).height();
	var topMemuHeight = jQuery('header').height();

	if (scrollPositions > headHeight) {
		buttonScrollTop.addClass('buttonShow');
	} else {
		buttonScrollTop.removeClass('buttonShow');
	}

	
	if (scrollPositions <= topMemuHeight / 3 && jQuery(window).width() > 990) {
		jQuery('header').removeClass('fixedTopMenu').addClass('noFixMenu');
	} else if (scrollPositions >= topMemuHeight * 1.5 && jQuery(window).width() > 990) {
		jQuery('header').css('height', topMemuHeight).addClass('fixedTopMenu').removeClass('noFixMenu');
	} else {
		
	}

}

function fullSlider() {
	"use strict";
	if (jQuery('.fullScreenSlider').length > 0) {
		jQuery('.sliderHomeBullets, .sliderHomeBullets .rsContent').css('height', jQuery(window).height())
	}
}


//Time Line
function timelineResponsive() {
	"use strict";
	var bodyHeight = jQuery(window).height();
	var headHeight = jQuery(window).height() - jQuery('.contentTimeLine h2').height() - 150;
	var leftPosition = (jQuery('.sweepContent').width() - jQuery('.main').width()) / 2 + jQuery('.sweepMenuWrap').width();
	jQuery('.TimeLineScroll .tlContentScroll').css('height', headHeight);

}


//time line Scroll
function timelineScrollFix() {
	"use strict";
	if (jQuery('.TimeLineScroll').length > 0) {
		var scrollWind = jQuery(window).scrollTop();
		var headerHeight = jQuery('header').height() + jQuery('.topTabsWrap').height();
		var footerHeight = jQuery('.footerContentWrap').height();

		if ((jQuery(document).height() - footerHeight) <= (scrollWind + jQuery(window).height())) {
			var footerVisible = true;
		} else {
			var footerVisible = false;
		}

		if (jQuery(window).scrollTop() <= headerHeight) {
			jQuery('.TimeLineScroll').addClass('timeLineFixTop');
		} else {

			if (headerHeight <= scrollWind - 10 & footerVisible != true) {
				jQuery('.TimeLineScroll').removeClass('timeLineFixTop').addClass('timeLineFix');
				jQuery('.TimeLineScroll').animate({
					marginTop: (scrollWind - headerHeight) + "px"
				}, {
					queue: false,
					duration: 350
				});

			} else {
				jQuery('.TimeLineScroll').removeClass('timeLineFix');
			}

		}



	}
}