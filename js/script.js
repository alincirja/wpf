/**************************************
==> Main JavaScript File
**************************************/
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        	var target = $(this.hash);
        	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        	if (target.length) {
          		$('html,body').animate({
	            	scrollTop: target.offset().top
	          	}, 1000);
          		return false;
        	}
      	}
    });
});

(function ($) {
	
	"use strict";

	$(document).ready(function() {

		$('.slic').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 8,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });/*slic*/

    $('#bList').bxSlider({
      pager: false,
      adaptiveHeight: true,
      auto: true,
      mode: 'fade'
    });

    $(window).scroll(function() {
      var sT = $(this).scrollTop();
      var wW = $(this).width();

      if ( wW > 789 && sT > 5 ) {
        $('#header').addClass('fixed');
      } else {
        $('#header').removeClass('fixed');
      }
    });

    $('#menuTrigger').click(function() {
      $('.nav-list').slideToggle();
    });

    $('.tab-items li').click(function() {
      $('.tab-items li').removeClass('active');
      $(this).addClass('active');
      $('.tabs-content-list li').hide();
      var target = $(this).find('a').attr('data-target');
      $(target).fadeIn();
      return false;
    });

    $('.faq-trigger').click(function() {
      var status = $(this).parent().attr('class');
      if ( status == 'active' ) {
        $(this).parent().removeClass('active');
      } else {
        $('.faq-list li').removeClass('active');
        $(this).parent().addClass('active');
      }
      return false;
    })

	});/*Doc.ready*/

}(jQuery));