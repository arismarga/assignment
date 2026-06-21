const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  slidesPerView: 1,
  spaceBetween: 0,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});