<template>
<Webscrap/>
</template>

<script>
import Webscrap from "@/components/python/webscrap";
export default {
  name: "price-tracker",
  components: {Webscrap},

  head(){
    return{
      title:'Blog | Price Tracker'
    }
  }
}
</script>

<style scoped>
html{
  font-family: 'Rajdhani',serif;
}
</style>
