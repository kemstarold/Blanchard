window.addEventListener('DOMContentLoaded', function () {

  let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__nav');
  let menuLinks = menu.querySelectorAll('.header__link');
  let search = document.querySelector('.header__btn');
  let searchBtn = document.querySelector('.searchwrapper');
  let searchClose = document.querySelector('.searchwrapper__exit')
  let tabsBtn = document.querySelectorAll('.how-tab__btn');
  let tabsItem = document.querySelectorAll('.how-tab__items');

  let swiper = new Swiper('.hero-swiper', {
    direction:'horizontal',
      pagination: {
      el:'.hero-swiper__pagination',
      type: 'bullets',
      clickable: !0
    },
  })

  // let swiper = new Swiper ('.hero-swiper', {
  //   direction: 'horizontal',
  //   effect: 'fade',
  //   // effect: 'flip',
  //   // flipEffect: {
  //   //   slideShadows: true,
  //   //   limitRotation: true,
  //   // },
  //   autoplay: {
  //     delay: 5000,
  //   },
  //   speed: 1000,
  // });  

  search.addEventListener('click', function () {
    searchBtn.classList.add('search-active');
    searchBtn.classList.remove('header__btn');
  })

  searchClose.addEventListener('click', function () {
    searchBtn.classList.remove('search-active');
  })

  burger.addEventListener('click',

    function () {

      burger.classList.toggle('burger-active');
      menu.classList.toggle('nav-active');

      document.body.classList.toggle('stop-scroll');
    })

  menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

      burger.classList.remove('burger-active');
      menu.classList.remove('nav-active');

      document.body.classList.remove('stop-scroll');
    });
  });

  tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) { btn.classList.remove('how-tab__btn--active') });
      e.currentTarget.classList.add('how-tab__btn--active');

      tabsItem.forEach(function (element) { element.classList.remove('how-tab-work--active') });
      document.querySelector(`[data-target = ${path}]`).classList.add('how-tab-work--active');
    });
  });

  $('.accordion') .accordion({
    heightStyle: 'content',
    active: false,
    collapsible: true,
  });
})
