<template>
  <article :class="item.variant && item.variant === 'column' ? 'w-full md:w-1/2' : 'w-full'" class="flex items-end relative p-6 md:px-8 md:py-12 h-[28rem] md:h-[35rem]">
    <SanityImage
      class="absolute top-0 left-0 w-full object-cover h-full"
      :asset-id="item.caseimage.asset._ref"
      auto="format"
      :alt="item.title"
      fm="webp"
    />
    <header class="flex flex-col z-10 text-white">
      <p>{{ item.category }}</p>
      <h3 class="text-2xl mt-4">
        {{ item.description }}
      </h3>
    </header>
  </article>
</template>

<script setup>
  const props = defineProps({
    item: {
      type: Object,
    }
  })
</script>
