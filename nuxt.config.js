export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'StreamVue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { hid: 'og-title', property: 'og:title', content: 'Streem Movies' },
      {
        hid: 'og-site-name',
        property: 'og:site_name',
        content: 'StreamVue.com',
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://avatars.githubusercontent.com/zax4r0',
      },
      {
        hid: 'og-image-url',
        property: 'og:image:url',
        content: 'https://avatars.githubusercontent.com/zax4r0',
      },
      { hid: 'og-image-width', property: 'og:image:width', content: 1280 },
      { hid: 'og-image-height', property: 'og:image:height', content: 720 },
      {
        hid: 'og-image-type',
        property: 'og:image:type',
        content: 'image/jpeg',
      },
      { hid: 'twitter-card', property: 'twitter:card' },
      { hid: 'twitter-site', property: 'twitter:site', content: 'zax4r0' },
      {
        hid: 'twitter-creator',
        property: 'twitter:creator',
        content: 'zax4r0',
      },

      // Overwrite the following in different pages
      {
        hid: 'twitter-img-src',
        property: 'twitter:image',
        content:
          'https://vue-screencasts-uploads.s3-us-west-2.amazonaws.com/thumbnails/logo.png',
      },
      {
        hid: 'twitter-title',
        property: 'twitter:title',
        content: 'StreamVue.com',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',
    // https://image.nuxtjs.org/
    '@nuxt/image',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      theme_color: '#b8e986',
      background_color: '#000000',
      display: 'minimal-ui',
      scope: '/',
      start_url: '/',
      name: 'StreamVue',
      description: 'Streem Movies',
      short_name: 'StreamVue',
    },

    image: {
      domains: ['avatars0.githubusercontent.com', 'image.tmdb.org'],
      screens: {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
        '2xl': 1536,
        '4xl': 2560,
      },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
  },

  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },

  server: {
    host: '0.0.0.0',
  },
}
