$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrolled').removeClass('hide');
    } else {
        $('.scrolled').addClass('hide');
    }
  });