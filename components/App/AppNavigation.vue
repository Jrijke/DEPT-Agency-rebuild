<template>
  <nuxt-link :class="linkClass" @click.native="closeNavbar" :to="`/`">Home</nuxt-link>
  <nuxt-link :class="linkClass" @click.native="closeNavbar" v-for="page in pages" :key="page" :to="`/${page.toLowerCase()}`">{{page}}</nuxt-link>
</template>

<script setup>
  const props = defineProps({
    linkClass: {
      type: String,
      default: ''
    }
  })

  const pages = ['Cases', 'Culture', 'Diensten', 'Insights', 'Careers', 'Contact'];

  const emit = defineEmits(['closeNavigation'])
  const closeNavbar = (id) => emit('closeNavigation', false);
</script>