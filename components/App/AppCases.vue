<template>
  <section class="flex flex-wrap">
    <AppCase v-for="item in data" v-bind:key="item._id" :item="item"/>
  </section>
</template>

<script setup>
  const query = groq`*[_type == "cases"] | order(_createdAt asc)`;
  const { data } = useSanityQuery(query);
</script>
