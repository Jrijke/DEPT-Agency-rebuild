<template>
  <button @click="toggleNavigation" class="navigation-mobile relative text-md font-light hover:cursor-pointer md:hidden">
    MENU
  </button>
  <nav class="fixed flex flex-col bg-dept-black top-0 left-[100vw] w-screen h-screen p-8 text-4xl leading-tight transition-[left] ease-in-out md:hidden" :class="{'show-menu': showNavbar}">
    <div class="flex flex-col items-end pt-14 h-screen">
      <nuxt-link @click.native="showNavbar = false" to="/" class="nav-item transition-all flex flex-col items-end w-full pb-1 border-b border-[#A3A3A3] hover:border-white py-2 hover:pr-3">Home</nuxt-link>
      <nuxt-link @click.native="showNavbar = false" v-for="page in pages" :key="page" :to="`/${page.toLowerCase()}`" class="nav-item transition-all flex flex-col items-end w-full pb-1 border-b border-[#A3A3A3] hover:border-white py-2 hover:pr-3">{{page}}</nuxt-link>
    </div>
    <button @click="toggleNavigation" class="absolute top-6 right-6 text-md hover:cursor-pointer">
      <img class="cursor-pointer" src="~assets/svg/close.svg" alt="close menu" width="10" height="10">
    </button>
  </nav>
</template>

<script setup>
  // Toggler for the menu to open or close
  import AppNavigation from './AppNavigation';

  const pages = ['Cases', 'Culture', 'Diensten', 'Insights', 'Careers', 'Contact'];

  const showNavbar       = ref(false);
  const toggleNavigation = () => {
    showNavbar.value = !showNavbar.value;
  }
</script>

<style>
  .show-menu {
    left: 0;
  }
</style>