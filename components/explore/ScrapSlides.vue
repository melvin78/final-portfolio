<template>
  <Splide :options="options">
    <SplideSlide>
      <img alt="Sample 1" src="/important/price-drop.PNG">
    </SplideSlide>
    <SplideSlide>
      <img alt="Sample 2" src="/important/price-drop-2.PNG">
    </SplideSlide>
    <SplideSlide>
      <img alt="Sample 3" src="/important/price-drop-3.PNG">
    </SplideSlide>


  </Splide>
</template>

<script>
export default {
  name: "ScrapSlides",
  data() {
    return {
      options:{

        type:'loop',
        autoplay: true,
        rewind:true,

      }
    }
  }
}
</script>

<style scoped>

</style>
