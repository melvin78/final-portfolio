<template>
  <div>
    <HeaderNav/>
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white">The Mind</span>
              <span class="mt-1 text-blue-400 text-sm">Thoughts & Opinions</span>
            </div>
            <div class="md:flex-grow" >
              <div class="shadow shadow-2xl rounded-2xl p-3.5 drop-shadow-2xl">
                <h2 class="text-2xl font-medium text-gray-300 title-font mb-2 font-bold">Life of a Junior Developer</h2>
                <p class="leading-relaxed text-gray-200">Everyone passes through this no matter the speciality at one point you were a junior, a temp somewhere
                  or even an intern. Before you become a dentist or even perform surgery you will first have to learn or see someone do it.
                </p>
                <a @click="$router.push('/blog/life-as-a-junior-developer')" class="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">Read More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">

                </div>
              </div>

              <div class="shadow shadow-2xl rounded-2xl p-3.5">
                <h2 class="text-2xl font-medium text-gray-300 font-bold title-font mb-2">Steps to Becoming a Good Developer
                </h2>
                <p class="leading-relaxed text-gray-200">Now that you are finally accustomed with the basics(<i>hopefully you didn't get lost</i>) i will share my
                  thoughts on what's next. The small details that you can add to your toolset to take you to the next level</p>
                <a @click="$router.push('/blog/the-next-step-to-becoming-a-good-developer')" class="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">Read More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>



            </div>

          </div>

          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-white ">The Program</span>
              <span class="text-sm text-blue-400">Time to code </span>
            </div>
            <div class="md:flex-grow">
              <div class="shadow shadow-2xl rounded-2xl p-3.5 drop-shadow-2xl">
                <h2 class="text-2xl font-medium text-gray-300 font-bold title-font mb-2">Cron Jobs</h2>
                <p class="leading-relaxed text-gray-200">Today, will share one of my code snippet that i wrote, was very proud of
                  it i was even thinking of taking a screenshot,frame it and hang it on my bedroom wall. This was way back while i was still
                  getting my feet wet with C#.</p>
                <a @click="$router.push('/blog/defining-cron-jobs-in-c-sharp')" class="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">Read More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">

                </div>
              </div>

              <div class="shadow shadow-2xl rounded-2xl p-3.5 drop-shadow-2xl">
                <h2 class="text-2xl font-medium text-gray-300 font-bold title-font mb-2">Price Tracker</h2>
                <p class="leading-relaxed text-gray-200"> As we we enter the festive season everyone wants to be gifted a present. Businesses will use this
                  opportunity to increase the prices on their commodities with absurd prices, some will
                  decide to give you some really great offers but on limited stock. Its now a matter of picking
                  your poison.You may want to buy that new stylish phone with a very good spec sheet,fast RAM,good
                  camera,blazing fast processor</p>
                <a @click="$router.push('/blog/price-tracker')" class="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">Read More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",

  head(){
    return{
      title:'Blog'
    }
  }
}
</script>

<style scoped>
html{
  font-family: 'Rajdhani',serif;
}
</style>
