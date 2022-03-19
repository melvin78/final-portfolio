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
export default {
  name: 'IndexPage',
  components:{Hero,HeaderNav},
  head(){
    return{
      title:'Home Paqe'
    }
  }
}
</script>

<style>



</style>
