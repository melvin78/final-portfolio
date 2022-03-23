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


import HeaderNav from "@/components/HeaderNav";
import Hero from "@/components/Hero";
import ExploreSection from "@/components/explore/ExploreSection";
export default {
  name: 'IndexPage',
  components:{ExploreSection, Hero,HeaderNav},
  head(){
    return{
      title:'Home Paqe'
    }
  }
}
</script>

<style>



</style>
