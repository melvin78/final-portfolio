<template>
  <section class="text-gray-600 body-font">
    <div class="max-w-5xl   mx-auto overflow-hidden bg-gradient-l from-blue-300 shadow-lg rounded-lg shadow-2xl  ">
      <div class="w-full sm:p-4 px-4 mb-6 ">
        <h1 class="title-font font-bold text-xl mb-2 text-white">Helpdesk Solution</h1>
        <span
          class="font-extralight bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold text-gray-600 leading-relaxed "><code>Vue, Nuxt, .NET 6, MySQL</code></span>
        <div class="leading-relaxed text-white font-light mb-3 ">
          A help desk solution that manages customer issues and requests by assigning
          ticket numbers for easier resolution by agents for better collaboration, improved daily workflow, and
          delight customers with your swift support.

        </div>


        <div class="flex justify-around">
          <button
            class="text-white bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center   mr-2 mb-2"
            type="button">
            <svg aria-hidden="true" class="w-4 h-4 mr-2 -ml-1" data-icon="github" data-prefix="fab" focusable="false"
                 role="img" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                fill="currentColor"></path>
            </svg>
            <a href="https://github.com/melvin78/TicketCRM" target="_blank">View Source Code</a>
          </button>
          <button

            class="text-white bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center   mr-2 mb-2"
            type="button">
            <svg aria-hidden="true" class="w-4 h-4 mr-2 -ml-1 text-[#626890]" data-icon="ethereum" data-prefix="fab"
                 focusable="false" role="img" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                fill="currentColor"></path>
            </svg>
            <a href="https://support-ui.webmelvin.me" target="_blank">Demo</a>
          </button>

        </div>
      </div>
      <div class="flex items-center lg:w-3/5 mx-auto  pb-10 mb-10   sm:flex-row flex-col">

        <div class=" w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <HelpdeskSlides/>
        </div>

      </div>
    </div>
    <div class="max-w-5xl mt-3  mx-auto overflow-hidden bg-gradient-l from-blue-300 shadow-lg rounded-lg shadow-2xl  ">
      <div class="w-full sm:p-4 px-4 mb-6 ">
        <h1 class="title-font font-bold text-xl mb-2 text-white">Price Tracker</h1>
        <span
          class="font-extralight bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold text-gray-600 leading-relaxed "><code>Python, Django, Beautiful Soup</code></span>
        <div class="leading-relaxed text-white font-light mb-3 ">
          An automatic way to keep track of prices of items from you favorite shop and know when their prices drop.


        </div>


        <div class="flex justify-around">
          <button
            class="text-white bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center   mr-2 mb-2"
            type="button">
            <svg aria-hidden="true" class="w-4 h-4 mr-2 -ml-1" data-icon="github" data-prefix="fab" focusable="false"
                 role="img" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                fill="currentColor"></path>
            </svg>
            <a href="https://github.com/melvin78/PriceTracker" target="_blank">View Source Code</a>
          </button>
          <button

            class="text-white bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center   mr-2 mb-2"
            type="button">
            <svg aria-hidden="true" class="w-4 h-4 mr-2 -ml-1 text-[#626890]" data-icon="ethereum" data-prefix="fab"
                 focusable="false" role="img" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                fill="currentColor"></path>
            </svg>
            <a @click="$router.push('/blog/price-tracker')" target="_blank">Info</a>
          </button>

        </div>      </div>
      <div class="flex items-center lg:w-3/5 mx-auto  pb-10 mb-10   sm:flex-row flex-col">

        <div class=" w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <ScrapSlides/>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
import HelpdeskSlides from "@/components/explore/HelpdeskSlides";
import ScrapSlides from "@/components/explore/ScrapSlides";

export default {
  components: {ScrapSlides, HelpdeskSlides},
  name: "ProjectItems"
}
</script>

<style scoped>

</style>
