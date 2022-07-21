import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()
flsFunctions.windowPopup()

import Swiper, { Pagination, Autoplay, EffectFade } from 'swiper'

const promoSlider = new Swiper('.swiper', {
  modules: [Pagination, Autoplay, EffectFade],
  speed: 900,
  effect: 'fade',
  autoplay: {
    delay: 7000,
  },
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.slider-promo__pagination'
  },
  speed: 400,
  slidesPerView: 1,
})