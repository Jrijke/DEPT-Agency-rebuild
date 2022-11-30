<template>
  <article :class="item.variant && item.variant === 'column' ? 'w-full md:w-1/2 h-[28rem]' : 'w-full flex-col md:flex-row h-[auto]'" class="case flex justify-between relative  md:h-[35rem]">
    <SanityImage
      :class="`${item.variant && item.variant === 'column' ? 'w-full h-full' : 'h-[30rem] md:h-full'} top-0 left-0 absolute object-cover`"
      :asset-id="item.caseimage.asset._ref"
      auto="format"
      :alt="item.title"
      fm="webp"
    />
    <header class="flex flex-col z-10 text-white justify-end p-6 md:px-8 md:py-12 " :class="{'h-[28rem]': item.variant === 'full-width'}">
      <p>{{ item.category }}</p>
      <h3 class="text-2xl mt-4">
        {{ item.description }}
      </h3>
    </header>
    <aside v-if="item.tasks" class="relative text-sm md:text-md flex flex-col justify-evenly h-[auto] md:h-full z-10 p-6 w-full md:w-2/5 bg-dept-black text-white">
      <div v-for="task in item.tasks" class="relative-task py-4 md:py-10 text-md leading-tight">
        <h3 class="mb-2 font-normal">{{ task.company }}</h3>
        <p class="text-md leading-tight font-light">{{ task.description }}</p>
        <nuxt-link to="/subpage" class="mt-2 block cursor-pointer">
          <img class="inline mr-2" src="~assets/svg/Ellipse.svg" alt="pointer" width="10" height="10">
          <span class="align-middle">Read more</span>
        </nuxt-link>
      </div>
    </aside>
  </article>
</template>

<script setup>
  const props = defineProps({
    item: {
      type: Object,
    }
  })
</script>

<style>
  .relative-task:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
</style>
