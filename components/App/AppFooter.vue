<template>
  <footer class="relative flex flex-row items-center">
    <div class="flex flex-1 flex-col md:flex-row relative p-12 bg-dept-black">
      <nuxt-link class="md:flex-1" to="/">
        <img class="relative cursor-pointer" src="~assets/svg/dept-logo.svg" alt="Dept-logo" width="73" height="20">
      </nuxt-link>
      <div class="flex flex-col z-10 text-white">
        <nav class="relative leading-tight flex flex-col md:flex-row md:justify-evenly md:min-w-[30rem]">
          <nuxt-link to="/">Cases</nuxt-link>
          <nuxt-link to="/">Culture</nuxt-link>
          <nuxt-link to="/">Diensten</nuxt-link>
          <nuxt-link to="/">Insights</nuxt-link>
          <nuxt-link to="/">Careers</nuxt-link>
          <nuxt-link to="/">Contact</nuxt-link>
        </nav>
      </div>
    </div>
    <div class="flex flex-4 flex-col relative w-28 bg-white">
      <button @click="backToTop()">up</button>
    </div>
  </footer>
</template>

<script setup>
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>