export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Marine & Clément',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/font.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue2-google-maps.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBIPB8h8l7GIoygcMVTQOm4L1j6Uw7BN1M',
          authDomain: '"marineclementbacouelle-2a1a0.firebaseapp.com',
          projectId: 'marineclementbacouelle-2a1a0',
          storageBucket: 'marineclementbacouelle-2a1a0.appspot.com',
          messagingSenderId: '967307899276',
          appId: '1:967307899276:web:adb32813ed4d6fe373e6a9',
          databaseURL: "https://marineclementbacouelle-2a1a0-default-rtdb.europe-west1.firebasedatabase.app"
        },
        services: {
          database: true,
        }

      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },

  buildModules: ['@nuxtjs/tailwindcss']
}
