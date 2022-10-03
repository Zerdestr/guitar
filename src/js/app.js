import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Pagination, EffectFade, Autoplay } from 'swiper';


const swiper = new Swiper('.customers__swiper', {
  // configure Swiper to use modules
  modules: [Pagination, EffectFade, Autoplay],

  direction: 'horizontal',
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
  },
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

let scrollpos = window.scrollY

const header = document.querySelector(".header")
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("header--fixed", "header--out");
const remove_class_on_scroll = () => header.classList.remove("header--fixed");
const remove_class_on_out = () => header.classList.remove("header--out");

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll(), remove_class_on_out() }

})

const onScrollStop = callback => {
  let isScrolling;
  window.addEventListener(
    'scroll',
    e => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback();
      }, 500);
    },
    false
  );
};

onScrollStop(() => {
  remove_class_on_out();
});
