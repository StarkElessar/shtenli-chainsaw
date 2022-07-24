import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()
flsFunctions.windowPopup()
flsFunctions.changeValue()
flsFunctions.stickyHeader()
flsFunctions.goTopBtn()
flsFunctions.followingLinks()

import Swiper, { Pagination, Autoplay, EffectFade } from 'swiper'

new Swiper('.slider-promo', {
  modules: [Pagination, Autoplay, EffectFade],
  speed: 400,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 2000,
  },
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.slider-promo__pagination'
  },
  slidesPerView: 1,
})

new Swiper('.product-image__slider', {
  modules: [Pagination, Autoplay],
  direction: 'horizontal',
  speed: 600,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  pagination: {
    el: '.product-image__pagination'
  },
  slidesPerView: 1,
  spaceBetween: 52
})