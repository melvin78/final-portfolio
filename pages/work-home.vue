<template>
  <div>
    <HeaderNav/>
    <section class="text-white body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20 ">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-500">Past Projects</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-2xl">This is where share whatever i have been working on over
            the years. Projects that
            am proud of and have been crafted to solve a specific problem.</p>
        </div>
        <div class="h-full text-center">
          <span class="inline-block h-1 w-20 rounded bg-indigo-500 mt-6 mb-4 "></span>

        </div>

        <ProjectItems/>

<!--        <div class="flex flex-wrap justify-around ">-->
<!--          <div class="xl:w-1/4 lg:w-1/2  md:w-full px-8 py-6 bg-gradient-l from-blue-300 shadow-lg shadow-2xl bg-gradient-to-br from-blue-300-->
<!--transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer-->
<!--">-->
<!--            <h2 class="text-lg sm:text-xl  font-bold title-font mb-2 ">Web Scraper Project</h2>-->
<!--            <p class="leading-relaxed text-base mb-4 font-light">A price tracker project-->
<!--              to detect price drops on items</p>-->
<!--            <button-->
<!--              class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">-->
<!--              More-->
<!--            </button>-->
<!--          </div>-->
<!--          <OverlapCard/>-->


<!--        </div>-->

      </div>
    </section>

  </div>
</template>

<script>
import OverlapCard from "@/components/extra/OverlapCard";
import ProjectItems from "@/components/extra/ProjectItems";
export default {
  name: "work",
  components: {ProjectItems, OverlapCard}
}
</script>

<style scoped>
html{
  font-family: 'Rajdhani',serif;
}
</style>
