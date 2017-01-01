'use strict';

const menu = $('.main-nav');
const windowHeight = $(window).innerHeight() - 67;
const menuLink = $('ul li a');

$(window).on('scroll', function(e) {
  if (e.currentTarget.window.scrollY >= windowHeight) {
    menu.css({ opacity: '0.8' });
    menuLink.css({ padding: '0' });
  } else {
    menu.css({ opacity: '1' });
    menuLink.css({ padding: '16px 8px' });
  }
});
