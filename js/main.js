$(function () {
  'use strict';
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
});
