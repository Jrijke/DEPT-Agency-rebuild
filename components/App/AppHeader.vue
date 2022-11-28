<template>
  <header class="absolute top-0 left-0 p-8 bg-dept-black text-white w-full z-20">
    <div class="flex justify-between">
      <nuxt-link to="/">
        <img class="relative cursor-pointer" src="~assets/svg/dept-logo.svg" alt="Dept-logo" width="73" height="20">
      </nuxt-link>
      <app-navigation-mobile/>
      <app-navigation-desktop/>
    </div>
  </header>
</template>

<script setup>
  // Get the headlines content from Sanity backend
  const query = groq`*[_type == "headlines"]`;
  const { data } = useSanityQuery(query);

  // Toggler for the menu to open or close
  const showNavbar = ref(false);
  const toggleNavigation = () => {
    showNavbar.value = !showNavbar.value;
  }
</script>

<style>
  .hide-menu {
    left: 100vw;
  }
</style>