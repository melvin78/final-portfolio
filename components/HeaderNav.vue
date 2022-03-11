<template>
  <header class="body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img class="object-cover w-16 h-16 border-2 border-green-600 rounded-full"
             src="/profile.jpg"
             alt="Avatar" />
        <span @click="$router.push('/')" class="ml-3 hover:underline text-2xl text-white font-extralight link link-hover hover:text-blue-400 cursor-pointer">Home</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center justify-center">
        <a class="text-2xl hover:underline mr-5 text-white link link-hover hover:text-blue-400 cursor-pointer" >Work</a>
        <a class="text-2xl hover:underline mr-5 text-white link link-hover hover:text-blue-400 cursor-pointer" @click="$router.push('/resume')">Resume</a>
        <a class="text-2xl hover:underline mr-5 text-white link link-hover hover:text-blue-400 cursor-pointer" @click="$router.push('/blog/home')">Blog</a>

      </nav>
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contacts
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>

</template>

<script>
export default {
  name: "HeaderNav",


}
</script>

<style scoped>
html{
  font-family: 'Fredoka', sans-serif;
}
</style>
