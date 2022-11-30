<template>
  <AppHeader/>
  <main class="main-default">
    <slot />
  </main>
  <AppFooter/>
</template>

<script setup>
  const route = useRoute();

  useHead({
    title: 'Dept agency rebuild',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'This is a Front end assignment for Dept Agency' },
      { property: 'og:title', content: `Dept agency rebuild - ${route.meta.title}` },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: 'default-layout'
    },
  })
</script>