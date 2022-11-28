<template>
  <button @click="toggleNavigation" class="relative text-md font-light hover:cursor-pointer md:hidden">
    MENU
  </button>
  <nav class="fixed flex flex-col bg-dept-black top-0 left-[100vw] w-screen h-screen p-8 text-4xl leading-tight transition-[left] ease-in-out md:hidden" :class="{'show-menu': showNavbar}">
    <div class="flex flex-col items-end pt-14 h-screen">
      <nuxt-link class="flex flex-col items-end w-full pb-1 border-b border-[#A3A3A3]" to="/">Cases</nuxt-link>
      <nuxt-link class="flex flex-col items-end w-full pb-1 border-b border-[#A3A3A3]" to="/">Culture</nuxt-link>
      <nuxt-link class="flex flex-col items-end w-full pb-1 border-b border-[#A3A3A3]" to="/">Diensten</nuxt-link>
      <nuxt-link class="flex flex-col items-end w-full pb-1 border-b border-[#A3A3A3]" to="/">Insights</nuxt-link>
      <nuxt-link class="flex flex-col items-end w-full pb-1 border-b border-[#A3A3A3]" to="/">Careers</nuxt-link>
      <nuxt-link class="flex flex-col items-end w-full pb-1 border-b border-[#A3A3A3]" to="/">Contact</nuxt-link>
    </div>
    <button @click="toggleNavigation" class="absolute top-6 right-6 text-md hover:cursor-pointer">
      <font-awesome-icon class="px-3 py-2 text-2xl" icon="fa-solid fa-xmark" />
    </button>
  </nav>
</template>

<script setup>
  // Toggler for the menu to open or close
  const showNavbar = ref(false);
  const toggleNavigation = () => {
    showNavbar.value = !showNavbar.value;
  }
</script>

<style>
  .show-menu {
    left: 0;
  }
</style>