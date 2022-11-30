<template>
  <article class="client relative flex justify-center items-center h-[7rem]">
    <SanityImage
      class="max-h-[2.5rem] md:max-h-[5.625rem]"
      :asset-id="client.clientLogo.asset._ref"
      auto="format"
      :alt="client.clientName"
      fm="webp"
      :h="90"
    />
  </article>
</template>

<script setup>
  const props = defineProps({
    client: {
      type: Object,
    }
  })
</script>