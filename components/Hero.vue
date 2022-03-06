<template>
  <section class=" body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class=" lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">

        <p class="text-7xl text-white">Hi,I'm Melvin</p>
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-extralight text-white">A fullstack Developer
          <br class="hidden lg:inline-block">Based in Nairobi,Kenya
        </h1>
        <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
        </div></div>

      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <FullVersion/>
      </div>


      </div>

  </section>
</template>

<script>
import FullVersion from "@/components/FullVersion";
export default {
  name: "Hero",
  components:{FullVersion}
}
</script>

<style scoped>

</style>
