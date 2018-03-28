const webpack = require('webpack')

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
  plugins: [
    { src: '~plugins/web-font-loader', ssr: false },
    { src: '~plugins/current-device', ssr: false },
    { src: '~plugins/vue-particles', ssr: false }
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
    vendor: ['lazysizes'],
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  }
}
