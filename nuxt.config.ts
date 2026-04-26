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
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTQiIGZpbGw9IiNCOTFDMUMiLz48dGV4dCB4PSI1MCUiIHk9IjU1JSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZHk9Ii4zZW0iPlBUVDwvdGV4dD48L3N2Zz4=' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  }
})
