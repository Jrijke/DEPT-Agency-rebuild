<template>
  <section v-for="headline in data" v-bind:key="headline._id" class='headline overflow-hidden fade-in-left flex items-end flex-al relative p-6 md:px-8 md:py-12 h-[26rem] md:h-[40rem]'>
    <SanityImage
      class="absolute top-0 left-0 w-full object-cover h-full"
      :asset-id="headline.headlineimage.asset._ref"
      auto="format"
      :alt="headline.title"
      fm='webp'
    />
    <div class="flex flex-col z-10 text-white">
      <p>{{ headline.category }}</p>
      <div class="text-2xl mt-4"><SanityContent :blocks="headline.title" /></div>
    </div>
  </section>
</template>

<script setup>
  const query = groq`*[_type == "headlines"]`;
  const { data } = useSanityQuery(query);
</script>

<style>
  .headline:after {
    content: '';
    position: absolute;
    background: rgb(18,18,18);
    background: linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 35%, rgba(18,18,18,0) 100%);
    width: 100%;
    height: 15rem;
    bottom: 0px;
    opacity: 0.7;
  }
</style>