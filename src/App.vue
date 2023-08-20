<template>
  
  <div class="wrapper">
    <div class="panel blue">
      <h1>Test animations</h1>
    </div>

    <div class="panel red">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem
        beatae cum deserunt earum eligendi enim explicabo harum illum ipsa iste
        iure, laborum, necessitatibus neque nulla quasi quod totam veritatis?
      </p>
    </div>

    <div class="panel orange">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        exercitationem expedita provident quibusdam sed voluptates?Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem, enim
        minima repudiandae tenetur
      </p>
  
    </div>

    <div class="panel green">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem
        beatae cum deserunt earum eligendi enim explicabo harum illum ipsa iste
        iure, laborum, necessitatibus neque nulla quasi quod totam veritatis?
      </p>
    </div>
  
    <div class="block"></div>
 
  
    
  </div>
  
</template>
<script>
import { init } from "@/gsap-example";
// import { rotation } from "@/gsap-example";

// import gsap from 'gsap'
// import {ScrollTrigger} from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);


export default {
  name: "App",
  components: {},
  mounted() {
    init();
    // rotation();
  },
  // methods: {
  //   scroll() {

  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".wrapper",
  //         scrub: 0.2,
  //         start: "top top",
  //         end: "bottom bottom",
  //       },
  //     })
  //     .to(".block", {
  //       rotation: 270,
  //       duration: 1,
  //       ease: "none",
  // });
  //   }
  // }
};
</script>

<style>
</style>
