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

const shakeTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

shakeTl
  .fromTo(
    ".main-btn",
    { rotate: -5 },
    { rotate: 5, ease: "none", duration: 0.1, yoyo: true, repeat: 5 },
    "<",
  )
  .to(".main-btn", { rotate: 0, ease: "none", duration: 0.3 });
