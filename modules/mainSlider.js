import gsap from "gsap";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const heroSlider = new Swiper(".hero-slider", {
  modules: [Pagination, Autoplay],
  slidesPerView: 1,
  rewind: true,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
