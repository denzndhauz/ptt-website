// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Enable SSG (Static Site Generation)
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  // Basic styling entry if needed
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'PTT IT-Solutions Cebu',
      meta: [
        { name: 'description', content: 'Expert IT & Security Solutions in Cebu - PC/Laptop repair, custom builds, and enterprise-grade CCTV setup.' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  }
})
