<template>


</template>

<script>
import {gsap, MotionPathPlugin} from "gsap/all";

export default {
  name: "FullVersion",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin)

    const angles = [0, 45, 90, 135, 180, 225, 270, 315];
    const rays = gsap.utils.toArray('.icons');

    const time = 300,
      animEase = "linear";

    gsap.set(["#rocket", "#rocket--self"], {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "center center"
    });

    const smallBirdTimeline = gsap.timeline()


    // smallBirdTimeline.to("#cog-one", {
    //
    //
    //   duration: 1,
    //   ease: "power1.inOut",
    //   transformOrigin:"50% 50%",
    //   motionPath:{
    //     path:"#path-one",
    //     start:0,
    //     end:1,
    //     align:"#path-one",
    //     alignOrigin:[0.5,0.5]
    //
    //   }
    // });


      gsap.to("#cog-one",{
        rotation:360,duration:2, transformOrigin:'center', ease: 'linear',repeat:-1,
      })
      gsap.to("#cog-two",{
        rotation:360,duration:3, transformOrigin:'center', ease: 'linear',repeat:-1,
      })
      gsap.to("#cog-three",{
        rotation:360,duration:2, transformOrigin:'center', ease: 'linear',repeat:-1,
      })
      gsap.to("#cog-four",{
        rotation:360,duration:3, transformOrigin:'center', ease: 'linear',repeat:-1,
      })

    gsap.to("#cog-five",{
      rotation:360,duration:2, transformOrigin:'center', ease: 'linear',repeat:-1,
    })
    gsap.to("#cog-six",{
      rotation:360,duration:3, transformOrigin:'center', ease: 'linear',repeat:-1,
    })
    gsap.to("#main-cog",{
      rotation:360,duration:6, transformOrigin:'center', ease: 'linear',repeat:-1,
    })

    // gsap.set('svg', {autoAlpha:1})


// the prep =====
    gsap.timeline({
      delay: 1,
      onComplete: action
    }).from(rays, {
      opacity: 0,
      y: 16,
      duration: 4,
      ease: 'elastic'
    })
      .to(rays, {
        duration: function (i, target, list) {
          return 0.5 + (i * 0.1)
        },
        ease: 'none',
        transformOrigin: 'left center',
        stagger: -0.3
      })

// and the action =============
    function action() {

      rays.forEach(function (ray, i) {


        const action = gsap.to(ray, {
          scale: 'random(0.95, 1)',
          rotation: '+=' + 'random(-3, 3)',
          duration: "random(0.5, 1)", // NO refresh!
          ease: 'random(bounce, power2, power1.inOut)',
          repeat: -1, yoyo: true, repeatRefresh: true
        });

        ray.addEventListener("mouseenter", function () {
          action.pause();
          gsap.to(ray, {scale: 1.2, x: 4, transformOrigin: 'center'})

        });

        ray.addEventListener("mouseleave", function () {
          action.play();
          gsap.to(ray, {x: 4, rotate: 10})
        })
      })
    }
  }
}
</script>

<style scoped>
/* #cog-one {*/
/*  transform-origin: center;*/
/*  animation: spin 10s linear infinite;*/
/*  animation-delay: 0.8s;*/
/*}*/


@keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  100% {
    -moz-transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
</style>
