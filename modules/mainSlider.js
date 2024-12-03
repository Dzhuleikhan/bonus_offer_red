import gsap from "gsap";
import Swiper from "swiper";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

let slide1Tl = gsap.timeline({ paused: true });
let slide2Tl = gsap.timeline({ paused: true });
let slide3Tl = gsap.timeline({ paused: true });

function resetSlides() {
  // gsap.set(".slide-1-info", { xPercent: -100 });
  // gsap.set(".slide-1-player", { yPercent: 50, opacity: 0 });
  // gsap.set(".slide-1-ellipse", { opacity: 0, rotate: 0 });
  // gsap.set(".slide-1-name", { yPercent: -50, opacity: 0 });
  gsap.set(".slide-2-info", { xPercent: -100 });
  gsap.set(".slide-2-img", { yPercent: 20, opacity: 0 });
  gsap.set(".slide-3-img", { yPercent: 20, opacity: 0 });
  gsap.set(".slide-3-info", { xPercent: -100 });
  gsap.set(".slide-3-ellipse", { opacity: 0, rotate: 0 });
}
resetSlides();

document.addEventListener("DOMContentLoaded", () => {
  slide1Tl.restart();
});

slide1Tl
  .fromTo(
    ".slide-1-info",
    {
      xPercent: -100,
    },
    { xPercent: 0, duration: 0.5, ease: "none" },
    "<",
  )
  .fromTo(
    ".slide-1-player",
    { yPercent: 50, opacity: 0 },
    { yPercent: 0, opacity: 1, duration: 0.5, ease: "none" },
    "<",
  )
  .fromTo(
    ".slide-1-ellipse",
    { opacity: 0 },
    {
      opacity: 1,
      ease: "none",
      duration: 0.5,
    },
    "<",
  )
  .fromTo(
    ".slide-1-name",
    { yPercent: -50, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      ease: "none",
      duration: 0.5,
    },
    "<",
  )
  .to(
    ".slide-1-ellipse",
    {
      rotate: -360,
      duration: 7,
      ease: "none",
      repeat: -1,
    },
    "<",
  );

slide2Tl
  .fromTo(
    ".slide-2-info",
    {
      xPercent: -100,
    },
    { xPercent: 0, duration: 0.5, ease: "none" },
    "<",
  )
  .fromTo(
    ".slide-2-img",
    { yPercent: 20, opacity: 0 },
    { yPercent: 0, opacity: 1, duration: 0.5, ease: "none" },
    "<",
  );

slide3Tl
  .fromTo(
    ".slide-3-img",
    { yPercent: 20, opacity: 0 },
    { yPercent: 0, opacity: 1, duration: 0.5, ease: "none" },
    "<",
  )
  .fromTo(
    ".slide-3-info",
    {
      xPercent: -100,
    },
    { xPercent: 0, duration: 0.5, ease: "none" },
    "<",
  )
  .fromTo(
    ".slide-3-ellipse",
    { opacity: 0 },
    {
      opacity: 1,
      ease: "none",
      duration: 0.5,
    },
    "<",
  )
  .to(
    ".slide-3-ellipse",
    {
      rotate: 360,
      duration: 7,
      ease: "none",
      repeat: -1,
    },
    "<",
  );

const heroSlider = new Swiper(".hero-slider", {
  modules: [Pagination, EffectFade, Autoplay],
  slidesPerView: 1,
  effect: "fade",
  speed: 1000,
  rewind: true,
  autoHeight: true,
  // autoplay: {
  //   delay: 3500,
  // },
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

heroSlider.on("slideChange", function () {
  let currentSlide = this.realIndex + 1;
  if (currentSlide === 1) {
    resetSlides();
    slide1Tl.restart();
  }
  if (currentSlide === 2) {
    resetSlides();
    slide2Tl.restart();
  }
  if (currentSlide === 3) {
    resetSlides();
    slide3Tl.restart();
  }
});
