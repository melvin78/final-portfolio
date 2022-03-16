<template>
<!--  <div class="flex justify-around">-->
<!--    <Javascript/>-->
<!--    <StylingTwo/>-->
<!--  </div>-->
  <div>
    <HeaderNav/>


    <Hero/>

<!--    <FullVersion/>-->

  </div>



</template>

<script>
import Styling from "~/components/styling";
import StylingTwo from "@/components/styling-two";
import Javascript from "@/components/javascript";
import Combined from "@/components/Combined";
import FullVersion from "@/components/FullVersion";
import HeaderNav from "@/components/HeaderNav";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Resume from "@/components/Resume";
export default {
  name: 'IndexPage',
  components:{Styling,StylingTwo,Javascript,Combined,FullVersion,Hero,HeaderNav,CTA,Resume},
  head(){
    return{
      title:'Home Paqe'
    }
  }
}
</script>

<style>



</style>
