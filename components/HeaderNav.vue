<template>
  <header class="body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img alt="Avatar"
             class="object-cover w-16 h-16 border-2 border-green-600 rounded-full"
             src="/profile.jpg"/>
        <span
          class="ml-3 hover:underline text-2xl text-white font-extralight link link-hover hover:text-blue-400 cursor-pointer"
          @click="$router.push('/')">Home</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center justify-center">
        <a class="text-2xl hover:underline mr-5 text-white link link-hover hover:text-blue-400 cursor-pointer">Work</a>
        <a class="text-2xl hover:underline mr-5 text-white link link-hover hover:text-blue-400 cursor-pointer"
           @click="$router.push('/resume')">Resume</a>
        <a class="text-2xl hover:underline mr-5 text-white link link-hover hover:text-blue-400 cursor-pointer"
           @click="$router.push('/blog/home')">Blog</a>

      </nav>

    </div>
  </header>

</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      show: false
    }
  }


}
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}

html {
  font-family: 'Fredoka', sans-serif;
}
</style>
