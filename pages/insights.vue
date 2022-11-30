<template>
  <AppHeadline/>
  <div class="sub-page h-48 p-8">
    <h1 class="text-4xl">{{ pageName }}</h1>
    <p>This is the subpage: {{ pageName }}</p>
    <p>Due to limited time i did not spend time on this page.</p>
  </div>
</template>

<script setup>
  const route = useRoute();
  const pageName = route.name;
</script>