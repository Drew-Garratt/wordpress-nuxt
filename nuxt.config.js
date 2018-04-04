const webpack = require('webpack')
require('dotenv').config()

module.exports = {
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-sass-resources-loader',
      [
        '@/assets/css/variables/_variables.scss',
        '@/assets/css/helpers/_mixins.scss',
        '@/assets/css/helpers/_functions.scss',
        '@/assets/css/base/_global_vars.scss'
      ]
    ]
  ],
  axios: {
    proxyHeadersIgnore: ['host', 'accept', 'accept-encoding']
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: process.env.WP_API + '/wp-json/.*',
        strategyOptions: {
          cacheName: 'wordpress-cache',
          cacheExpiration: {
            maxEntries: 10,
            maxAgeSeconds: 300
          }
        }
      },
      {
        urlPattern: '^https://fonts.(?:googleapis|gstatic).com/(.*)',
        handler: 'cacheFirst'
      }
    ]
  },
  plugins: [
    { src: '~plugins/web-font-loader', ssr: false },
    { src: '~plugins/current-device', ssr: false },
    { src: '~plugins/vue-particles', ssr: false },
    { src: '~plugins/lazysizes', ssr: false }
  ],
  css: ['normalize.css', '@/assets/css/main.scss'],
  /*
  ** Headers of the page
  */
  head: {
    title: 'wordpress-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'NUXT powered Wordpress Site'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    maxChunkSize: 300000,
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  }
}
