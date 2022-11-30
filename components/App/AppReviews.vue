<template>
  <section v-for="review in data" class="reviews relative flex flex-col text-center bg-dept-black text-white w-full px-7 py-16 md:p-14">
    <span class="text-xl leading-6 font-light"><span class="text-2xl leading-6 font-light">"</span>{{ review.review }}<span class="text-2xl leading-6 font-light">"</span></span>
    <h4 class="mt-4 text-sm font-light">{{ review.reviewer }} - {{ review.role }}</h4>
  </section>
</template>

<script setup>
  const query = groq`
    *[_type == "reviews"] | order(_createdAt asc){
      review,
      reviewer,
      role,
    }
  `;
  const { data } = useSanityQuery(query);
</script>
