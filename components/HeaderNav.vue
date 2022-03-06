<template>
  <header class="body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img class="object-cover w-16 h-16 border-2 border-green-600 rounded-full"
             src="m.jpg"
             alt="Avatar" />
        <span class="ml-3 text-xl text-white font-extralight">Melvin 0. Odhiambo</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center justify-center">
        <a class="mr-5 text-white">Work</a>
        <a class="mr-5 text-white">Resume</a>
        <a class="mr-5 text-white">Contact</a>
      </nav>
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>

</template>

<script>
export default {
  name: "HeaderNav"
}
</script>

<style scoped>

</style>
