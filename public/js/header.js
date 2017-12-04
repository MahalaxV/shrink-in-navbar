$(window).scroll(function() {
  if($("header").hasClass('shrink')) {
    if ($(document).scrollTop() <= 10) {
      $('header').removeClass('shrink');
    }
  }
  else {
    if ($(document).scrollTop() > 300) {
      $('header').addClass('shrink');
    }
  }
});
