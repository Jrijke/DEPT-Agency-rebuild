export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity'
  ],
  sanity: {
    projectId: "36dtd7zk",
    apiVersion: '2022-11-27'
  },
})
