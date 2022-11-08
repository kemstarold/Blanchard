window.addEventListener('DOMContentLoaded', function () {
  let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__top-menu');

  let heroSwiper = new Swiper('.hero-swiper', {
    direction: 'horizontal',
    // effect: 'cube',
    // cubeEffect: {
    //   slideShadows: true,
    //   shadowOffset: 20,
    //   shadowScale: 0.94
    // },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 3000,
    },
    speed: 2500,
  });

  let galeiSwiper = new Swiper('.galleri-swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerColumnFill: 'row',
    slidesPerColumn: 2,
    slidesPerGroup: 3,
    spaceBetween: 50,

    pagination: {
      el: '.galleri-button__pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  burger.addEventListener('click',

    function () {

      burger.classList.toggle('burger-active');
      menu.classList.toggle('nav-active');

      document.body.classList.toggle('stop-scroll');
    })

})