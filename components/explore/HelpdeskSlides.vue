<template>
  <Splide :options="options">
    <SplideSlide>
      <img alt="Sample 1" src="/important/support-ui-home.PNG">
    </SplideSlide>
    <SplideSlide>
      <img alt="Sample 2" src="/important/oidc.PNG">
    </SplideSlide>
    <SplideSlide>
      <img alt="Sample 3" src="/important/ticket-dashboard.PNG">
    </SplideSlide>
    <SplideSlide>
      <img alt="Sample 3" src="/important/ticket-summary.PNG">
    </SplideSlide>
    <SplideSlide>
      <img alt="Sample 3" src="/important/conversation.PNG">
    </SplideSlide>
    <SplideSlide>
      <img alt="Sample 3" src="/important/agent-portal.PNG">
    </SplideSlide>
    <SplideSlide>
      <img alt="Sample 3" src="/important/agent-portal-mine.PNG">
    </SplideSlide>
    <SplideSlide>
      <img alt="Sample 3" src="/important/raised-issue.PNG">
    </SplideSlide>

  </Splide>
</template>

<script>
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';


export default {
  name: "HelpdeskSlides",

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
