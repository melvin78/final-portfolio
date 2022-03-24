<template>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import HelpdeskSlides from "@/components/explore/HelpdeskSlides";
export default {
  name: "ExploreSection",
  components: {HelpdeskSlides},
  computed:{
    ...mapGetters({

      GetExplore:'explore/getExplore'
    })
  }

}
</script>

<style scoped>

</style>
