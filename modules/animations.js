import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

gsap.set(".steps-item", { x: -100, opacity: 0 });
gsap.set(".steps-btn", { y: 30, opacity: 0 });

const stepTl = gsap.timeline();

stepTl
  .to(".steps-item", {
    x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "none",
    stagger: 0.4,
  })
  .to(".steps-btn", { y: 0, opacity: 1, duration: 0.5, ease: "none" });

ScrollTrigger.create({
  trigger: ".steps-wrapper",
  start: "center bottom",
  end: "bottom bottom",
  animation: stepTl,
});

gsap.set(".choose-item", { y: 70, opacity: 0 });
gsap.set(".choose-btn", { y: 40, opacity: 0 });

const chooseTl = gsap.timeline();

chooseTl
  .to(".choose-item", {
    y: 0,
    opacity: 1,
    duration: 0.3,
    ease: "none",
    stagger: 0.4,
  })
  .to(".choose-btn", { y: 0, opacity: 1, duration: 0.5, ease: "none" });

ScrollTrigger.create({
  trigger: ".choose-wrapper",
  start: "center bottom",
  end: "bottom bottom",
  animation: chooseTl,
});

let mm = gsap.matchMedia();

mm.add("(min-width: 1200px)", () => {
  gsap.set(".cross-top-left", { xPercent: -100, opacity: 0 });
  gsap.set(".cross-top-right", { xPercent: 100, opacity: 0 });
  gsap.set(".cross-bottom-right", { yPercent: 100, opacity: 0 });
  gsap.set(".cross-bottom-left", { yPercent: 100, opacity: 0 });

  const crossTl = gsap.timeline();

  crossTl
    .to(".cross-top-left", {
      xPercent: 0,
      opacity: 1,
      duration: 1.5,
      ease: "none",
    })
    .to(".cross-top-right", {
      xPercent: 0,
      opacity: 1,
      duration: 1.5,
      ease: "none",
    })
    .to(".cross-bottom-right", {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
      ease: "none",
    })
    .to(".cross-bottom-left", {
      yPercent: 0,
      opacity: 1,
      duration: 1.5,
      ease: "none",
    });

  ScrollTrigger.create({
    trigger: "#steps",
    start: "top center",
    end: "bottom 40%",
    scrub: true,
    animation: crossTl,
  });
});

const shakeTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

shakeTl

  .fromTo(
    ".main-btn",
    { rotate: -5 },
    { rotate: 5, ease: "none", duration: 0.1, yoyo: true, repeat: 5 },
    "<",
  )
  .to(".main-btn", { rotate: 0, ease: "none", duration: 0.3 });
