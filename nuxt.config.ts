export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity'
  ],
  sanity: {
    projectId: "36dtd7zk",
    apiVersion: '2022-11-27'
  },
})
