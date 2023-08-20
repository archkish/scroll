import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ini() {
  let sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".wrapper",
      pin: true,
      scrub: 2,
      snap: 1 / (sections.length - 1),
      end: "+=3500",
      ease: "none",
    },
  });
}
