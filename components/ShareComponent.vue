<template>
  <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
    <p class="font-extralight text-2xl"> Article by</p>
    <h2 class="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
      Melvin Odhiambo <br>
      <bdi class="font-extralight text-2xl">Fullstack Developer</bdi>
    </h2>

    <div class="mt-6 sm:-mx-2">
      <p class="text-sm font-extralight mb-2"> share this article</p>
      <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
       <ShareNetwork
         class="ml-2"
         network="facebook"
         url="https://webmelvin.me/blog/life-as-developer"
         title="Learning how to become a better developer"
         description="Everyone passes through this stage no matter the speciality at one point you were a junior,a temp somewhere
            or intern"
         quote="Melvin Odhiambo"
       >
           <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
               viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
           </a>
       </ShareNetwork>
  <ShareNetwork
    class="ml-2"
    network="twitter"
    url="https://webmelvin.me/blog/life-as-developer"
    title="Learning how to become a better developer"
    description="Everyone passes through this stage no matter the speciality at one point you were a junior,a temp somewhere
            or intern"
    quote="Melvin Odhiambo"
  >
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
               viewBox="0 0 24 24">
            <path
              d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
  </ShareNetwork>
          <ShareNetwork
            class="ml-2"
            network="whatsapp"
            url="https://webmelvin.me/blog/life-as-developer"
            title="Learning how to become a better developer"
            description="Everyone passes through this stage no matter the speciality at one point you were a junior,a temp somewhere
            or intern"
            quote="Melvin Odhiambo"
          >
        <a class=" text-gray-500">
       <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
        </a>
          </ShareNetwork>
          <ShareNetwork
            class="ml-2"
            network="linkedin"
            url="https://webmelvin.me/blog/life-as-developer"
            title="Learning how to become a better developer"
            description="Everyone passes through this stage no matter the speciality at one point you were a junior,a temp somewhere
            or intern"
            quote="Melvin Odhiambo"
          >
        <a class="text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"
               class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
          </ShareNetwork>
      </span>


    </div>

  </div>

</template>

<script>
export default {
  name: "ShareComponent"
}
</script>

<style scoped>

</style>
