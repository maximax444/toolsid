$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.scrolled').removeClass('hide');
  } else {
    $('.scrolled').addClass('hide');
  }
});
const swiper = new Swiper('.fis .swiper', {

  slidesPerView: 3,
  spaceBetween: 19,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.fis__next1',
    prevEl: '.fis__prev1',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 14
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 3,
      spaceBetween: 19
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 19
    }
  }
});
$('.fis__slider .swiper-slide.swiper-slide-next').on('click', function () {
  console.log('next');
  swiper.slideNext();
});
$('.fis__slider .swiper-slide.swiper-slide-next').next('.swiper-slide').on('click', function () {
  swiper.slideNext();
  swiper.slideNext();
});
swiper.on('transitionEnd', function () {

  $('.fis__img img').attr('src', $('.fis__slider .swiper-slide-active').find('img').attr('src'));
  $('.fis__slider .swiper-slide.swiper-slide-next').on('click', function () {
    console.log('next');
    swiper.slideNext();
  });
  $('.fis__slider .swiper-slide.swiper-slide-next').next('.swiper-slide').on('click', function () {
    swiper.slideNext();
    swiper.slideNext();
  });
});
$('div.quiz__next').on('click', function () {
  if ($(this).closest('.quiz__control').find('input').val() != '') {
    let quizNow = $('.quiz__slide.active');
    quizNow.next('.quiz__slide').addClass('active');
    quizNow.removeClass('active');
  } else {
    $(this).closest('.quiz__control').find('input').addClass('error');
  }
});
$('button.quiz__next').on('click', function () {
  if ($(this).closest('.quiz__control').find('input').val() != '') {
    let quizNow = $('.quiz__slide.active');
    quizNow.next('.quiz__slide').addClass('active');
    quizNow.removeClass('active');
  } else {
    $(this).closest('.quiz__control').find('input').addClass('error');
  }
});
$('.quiz__prev').on('click', function () {
  let quizNow = $('.quiz__slide.active');
  quizNow.prev('.quiz__slide').addClass('active');
  quizNow.removeClass('active');
});
$('.quiz__control input').on('input', function () {
  $(this).removeClass('error');
});
$('.work__next').on('click', function (e) {
  e.preventDefault();
  $('.work__wrap').animate({
    scrollLeft: $('.work__wrap').scrollLeft() + 180
  }, 500);
});
$('.integration__next, .integration__prev').on('click', function () {
  if ($(this).closest('.integration__block').find('span').hasClass('active')) {
    $(this).closest('.integration__block').find('span').removeClass('active');
  } else {
    $(this).closest('.integration__block').find('span').addClass('active')
  }
});
var hammertime = new Hammer(document.getElementById('integration__block1'));
hammertime.on('swipeleft swiperight', function (ev) {
  if ($('#integration__block1').find('span').hasClass('active')) {
    $('#integration__block1').find('span').removeClass('active');
  } else {
    $('#integration__block1').find('span').addClass('active')
  }
});

var hammertime2 = new Hammer(document.getElementById('integration__block2'));
hammertime2.on('swipeleft swiperight', function (ev) {
  if ($('#integration__block2').find('span').hasClass('active')) {
    $('#integration__block2').find('span').removeClass('active');
  } else {
    $('#integration__block2').find('span').addClass('active')
  }
});

var hammertime3 = new Hammer(document.getElementById('integration__block3'));
hammertime3.on('swipeleft swiperight', function (ev) {
  if ($('#integration__block3').find('span').hasClass('active')) {
    $('#integration__block3').find('span').removeClass('active');
  } else {
    $('#integration__block3').find('span').addClass('active')
  }
});
$('.header__burg').on('click', function (e) {
  e.preventDefault();
  $('.header .header__burg').toggleClass('active');
  $('.scrolled .header__burg').toggle();
  $('.header__right').toggleClass('active');
});
$('.header__menu a').on('click', function () {
  $('.header .header__burg').removeClass('active');
  $('.scrolled .header__burg').show();
  $('.header__right').removeClass('active');
});
$("body").on('click', '[href*="#"]', function (e) {
  var fixed_offset = 50;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});
$(document).mouseup(function (e) { // событие клика по веб-документу
  var div = $(".header__menu"); // тут указываем ID элемента
  var div2 = $(".header__contact");
  var div3 = $(".header__burg");
  if (!div.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0 && !div2.is(e.target) // если клик был не по нашему блоку
    && div2.has(e.target).length === 0 && !div3.is(e.target) // если клик был не по нашему блоку
    && div3.has(e.target).length === 0) { // и не по его дочерним элементам
    $('.header .header__burg').removeClass('active');
    $('.scrolled .header__burg').show();
    $('.header__right').removeClass('active');
  }
});