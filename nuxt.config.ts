export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity'
  ],
  runtimeConfig: {
    public: {
      CONTENTFUL_API_BASE_URL: process.env.CONTENTFUL_API_BASE_URL,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    }
  },
  sanity: {
    projectId: 'myProject'
  },
})
