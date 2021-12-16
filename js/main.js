$(function () {
  'use strict';
  // Add Smooth Scroll
  // $('html , body').animate({ scrollTop: 0 }, 400);
  // -------------------------------------------------------------------------->
  var scrollButton = $('#scroll-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      scrollButton.show();
      $('.navbar').css({ backgroundColor: '#2a2a2a' });
    } else {
      scrollButton.hide();
      $('.navbar').css({ backgroundColor: 'unset' });
    }
  });
  // click button as scroll to top 
  scrollButton.on('click', function () {
    $('html ,body').animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  // -------------------------------------------------------------------------->
  // list items click to move section
  $('.navbar .container .links > li a').on('click', function () {
    $('html,body').animate(
      {
        scrollTop: $('#' + $(this).data('value')).offset().top - 60,
      },
      400
    );
    $(this).parent().addClass('active').siblings().removeClass('active');
  });
  // -------------------------------------------------------------------------->
  // trigger owl js
  $('.choose-us .owl-carousel').owlCarousel({
    rtl: false,
    loop: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $('.testimonial .owl-carousel').owlCarousel({
    items: 1,
    lazyLoad: true,
    loop: true,
    margin: 10,
  });
  // -------------------------------------------------------------------------->
  // trigger aos animate
  AOS.init();
  // -------------------------------------------------------------------------->
  // trigger menu mobile
  var i = document.querySelector('.burger-container'),
    a = document.querySelector('.header');
  i.onclick = function () {
    a.classList.toggle('menu-opened');
  };
});
