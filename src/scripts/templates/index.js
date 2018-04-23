$(document).ready(function() {

  var header = $('.site-header header.on-hero')[0];
  var scrollOffset = $(window).scrollTop();

  if (scrollOffset > 150) {
    if (!$(header).hasClass('solid-header')) 
      $(header).addClass('solid-header');
  }

  $(window).on('scroll', function() {

    scrollOffset = $(window).scrollTop();

    if (scrollOffset > 150) {
      if (!$(header).hasClass('solid-header')) 
        $(header).addClass('solid-header');
    }
    else {
      if ($(header).hasClass('solid-header'))
        $(header).removeClass('solid-header');
    }
  });

});