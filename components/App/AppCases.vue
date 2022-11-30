<template>
  <section class="cases overflow-hidden fade-in-bottom flex flex-wrap">
    <AppCase v-for="item in data" v-bind:key="item.title" :item="item"/>
  </section>
</template>

<script setup>
  const props = defineProps({
    countFromIndex: {
      type: Number,
      default: null,
    },
    countUntilIndex: {
      type: Number,
      default: null,
    }
  })

  const maxItems = props.countUntilIndex != null && props.countFromIndex != null ? `[${props.countFromIndex}..${props.countUntilIndex}]` : '';
  const query = groq`
   *[_type == "cases"] | order(_createdAt asc)${maxItems}{
      title,
      description,
      category,
      variant,
      caseimage,
      'tasks': tasks[]->{company, description}
    }
  `;
  const { data } = useSanityQuery(query);
</script>

<style lang='postcss'>
  .case:after {
    content: '';
    position: absolute;
    background: rgb(18,18,18);
    background: linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 35%, rgba(18,18,18,0) 100%);
    width: 100%;
    height: 15rem;
    bottom: 0px;
    opacity: 0.7;
  }

  .case:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #121212;
    opacity: 0.2;
    z-index: 1;
    transition: opacity 0.2s ease-in;
  }

  .case:hover::before {
    opacity: 0;
  }
</style>