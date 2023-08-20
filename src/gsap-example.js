import {gsap} from "gsap";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let panels = document.querySelectorAll(".panel");


function blockScroll(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function defineCurrentBoxIndex(targets) {
    return targets.map((item) => document.querySelector(item)).findIndex((element) => {
        const top = element.offsetTop;
        const bottom = element.offsetTop + element.clientHeight;
        if (window.scrollY >= top && window.scrollY < bottom) return true;
    });
}

export function init() {



    const targets = ['.blue', '.red', '.orange', '.green'];

    let currentBoxIndex = defineCurrentBoxIndex(targets);
    let isActiveScroll = false;

    window.onwheel = (e) => {



        if (isActiveScroll) return;

        const direction = e.deltaY > 0 ? 'down' : 'up';

        const pickBoxIndex = () => {
            if (direction === 'down') {
                if (currentBoxIndex !== targets.length - 1) {
                    return currentBoxIndex + 1;
                }
            } else {
                if (currentBoxIndex > 0) {
                    return currentBoxIndex - 1;
                }
            }

            return null;
        }

        let toBoxIndex = pickBoxIndex();

        if (toBoxIndex !== null) {
            isActiveScroll = true;


            let scroll =   gsap.to(window, {
                scrollTo: targets[toBoxIndex],
                duration: 2,
                onStart: () => {
                    document.body.addEventListener('mousewheel', blockScroll, {passive: false});
                },
                onComplete: () => {
                    currentBoxIndex = toBoxIndex;
                    document.body.removeEventListener('mousewheel', blockScroll);
                    isActiveScroll = false;
                },
            });

            gsap.timeline({
                scrollTrigger:{
                  trigger: panels,
                  containerAnimation: scroll,
                  pin: true,
                  scrub: true,
                  start: 'top top',
                  end: '+=10000',
                  
                }
              })
              .to(".block", {
                rotation: 180*3,
                duration: 1,
                ease: "linear"
              })

        }

       
    }
}
