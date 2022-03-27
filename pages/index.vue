<template>
  <!--  <div class="flex justify-around">-->
  <!--    <Javascript/>-->
  <!--    <StylingTwo/>-->
  <!--  </div>-->
  <div>
    <HeaderNav/>


    <Hero/>

    <!--    <FullVersion/>-->
 <ExploreSectionTwo/>
    <PriceDrop/>
  </div>


</template>

<script>


import HeaderNav from "@/components/HeaderNav";
import Hero from "@/components/Hero";
import ExploreSection from "@/components/explore/ExploreSection";
import ExploreSectionTwo from "@/components/explore/ExploreSectionTwo";
import PriceDrop from "@/components/explore/PriceDrop";

export default {
  name: 'IndexPage',
  components: {PriceDrop, ExploreSectionTwo, ExploreSection, Hero, HeaderNav},
  head() {
    return {
      title: 'Home Paqe'
    }
  }
}
</script>

<style>


</style>
