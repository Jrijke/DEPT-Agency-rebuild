<template>
  <footer class="footer relative md:grid md:grid-cols-[1fr_7rem] items-center">
    <div class="grid grid-cols-1 relative p-7 md:p-12 bg-dept-black">

      <div class="grid grid-cols-[10rem_1fr] items-center w-full z-10 text-white">
        <nuxt-link class="hidden md:block w-[73px] h-[20px]" to="/">
          <img class="relative cursor-pointer" src="~assets/svg/dept-logo.svg" alt="Dept-logo" width="73" height="20">
        </nuxt-link>
        <nav class="relative leading-tight flex flex-col md:flex-row md:justify-evenly md:max-w-[40rem]">
          <AppNavigation link-class="block py-3 md:pr-4 text-lg font-light" />
        </nav>
      </div>

      <div class="socket grid gap-5 md:gap-0 md:grid-cols-[1fr_12rem] col-span-3 border-t border-t-dept-gray mt-10 p-4 text-[#808080]">
        <div class="socket__left flex flex-col md:flex-row">
          <span class="md:mr-10">Chamber of Commerce: 63464101</span>
          <span class="md:mr-10">VAT: NL 8552.47.502.B01</span>
          <span class="md:mr-10">Terms and conditions</span>
        </div>
        <div class='socket__right'>
          © {{ year }} Dept Agency
        </div>
      </div>
    </div>
    <div class="absolute md:relative bottom-0 md:bottom-[unset] right-0 md:right-[unset] h-20 md:h-full w-20 md:w-28 flex justify-center flex-col bg-white">
      <button @click="backToTop()">TOP</button>
    </div>
  </footer>
</template>

<script setup>
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const currentDate = new Date();
  const year = currentDate.getFullYear();
</script>