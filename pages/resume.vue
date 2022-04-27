<template>
<Resume/>
</template>

<script>
import Resume from "@/components/Resume";
export default {
  name: "resume",
  components:{Resume},
  head(){
    return{
      title:"Resume"
    }
  }
}
</script>

<style scoped>
html{
  font-family: 'Rajdhani',serif;
}
</style>
