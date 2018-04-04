importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wordpress-nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/10.1ee0f263d4a900734663.js",
    "revision": "53088c58071b0a098f5e0528ab3dfa18"
  },
  {
    "url": "/_nuxt/7.f958c498c01786c84d52.js",
    "revision": "51c2f1bd1ccf6794ce3c91f58ff0e3fd"
  },
  {
    "url": "/_nuxt/9.fe7b0694d9c6890da237.js",
    "revision": "36fcb2a4ff3aaff7de5fd0cac4612dea"
  },
  {
    "url": "/_nuxt/app.d560ac8a34cb183c7223.js",
    "revision": "34d0fd53a31417b1368406e48613563b"
  },
  {
    "url": "/_nuxt/layouts_default.a5dca60d9750513281d5.js",
    "revision": "b2eaf7624f7ee8ab3fa306ddfbeb0d37"
  },
  {
    "url": "/_nuxt/manifest.ae7475be5d03f8454876.js",
    "revision": "dad2670cf6896b2cb4adc7261e4dd7e5"
  },
  {
    "url": "/_nuxt/pages__slug__subSlug.b6a177859123a18b0c3b.js",
    "revision": "8fcc8695803b02e5b1c7de34a44fb23b"
  },
  {
    "url": "/_nuxt/pages__slug_index.bf61ef2645de5f550ea6.js",
    "revision": "7ed7f2c5da5163ff67169e02297f0518"
  },
  {
    "url": "/_nuxt/pages_index.1b4adadc3a3ac331dc9e.js",
    "revision": "ec3cc5cd5e94fca63fb778089f4d939c"
  },
  {
    "url": "/_nuxt/pages_news__slug.145fa2aa8fb3803e5fca.js",
    "revision": "73327b66b25da5f4244dbb0daf232cf8"
  },
  {
    "url": "/_nuxt/pages_news_index.18ac1aaba4998f51b7c3.js",
    "revision": "366c621c180bac2394741d96f444c340"
  },
  {
    "url": "/_nuxt/vendor.75cdbd6117b750874c2e.js",
    "revision": "39cae4c5a041095e986ffad974f5bcc9"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

