'use strict';

let menu = $('.main-nav');
let windowHeight = $(window).innerHeight() - 67;
let menuLink = $('ul li a');

$(window).on('scroll', function(e) {
  if (e.currentTarget.window.scrollY >= windowHeight) {
    menu.css({ opacity: '0.8' });
    menuLink.css({ padding: '0' });
  } else {
    menu.css({ opacity: '1' });
    menuLink.css({ padding: '16px 8px' });
  }
});
