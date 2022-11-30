<template>
  <section v-for="clientOverview in data" class="clients relative flex flex-col bg-dept-black text-white w-full px-7 py-16 md:p-14">
    <h3 class="text-xl leading-6 font-light">{{ clientOverview.title }}</h3>
    <p class="mt-4 text-sm font-light">{{ clientOverview.description }}</p>
    <div class="clients-overview grid mt-8">
      <AppClient class="client" v-for="client in clientOverview.clients" :key="client" :client="client"/>
    </div>
  </section>
</template>

<script setup>
  const query = groq`
    *[_type == "clients"] | order(_createdAt asc){
      title,
      description,
      'clients': clients[]->{clientName, clientLogo}
    }
  `;
  const { data } = useSanityQuery(query);
</script>

<style>
  .clients-overview {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>