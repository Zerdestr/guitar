import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Pagination, EffectFade } from 'swiper';


const swiper = new Swiper('.customers__swiper', {
  // configure Swiper to use modules
  modules: [Pagination, EffectFade],

  direction: 'horizontal',
  effect: "fade",
  loop: true,
  // loop: true,


  wrapperClass: 'customers__wrapper',
  slideClass: 'customers__slide',
  slideActiveClass: 'customers__slide--active',

  // If we need pagination
  pagination: {
    el: '.customers__pagination',
    type: 'bullets',
    bulletClass: 'customers__pagination-bullet',
    bulletActiveClass: 'customers__pagination-bullet--active',
    clickable: true
  },
});