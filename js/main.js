$(function () {
  'use strict';
  // trigger owl js
  $('.owl-carousel').owlCarousel({
    rtl: false,
    loop: true,
    animateOut: 'fadeOut',
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
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
});
