importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wordpress-nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/7.e06aac54bcdfcc0aff1c.js",
    "revision": "fd9f847daa05ae52f9719af711f9107d"
  },
  {
    "url": "/_nuxt/9.e37198b38c2b705a677b.js",
    "revision": "ec8ea312c8ec9053eaaadcb1515af0ab"
  },
  {
    "url": "/_nuxt/app.d991316dde95c79e4908.js",
    "revision": "408d5cd3908941d6345451680f558252"
  },
  {
    "url": "/_nuxt/layouts_default.763aba88a8016562930b.js",
    "revision": "1a084194354a2594610f944b1ff811a9"
  },
  {
    "url": "/_nuxt/manifest.bd3761e7f99858a13e77.js",
    "revision": "b4efd9493dadcab8a1278db2e5ea6897"
  },
  {
    "url": "/_nuxt/pages__slug__subSlug.2de00aa14a5254ced08a.js",
    "revision": "c95e479b1debe070b4f6048676d6e472"
  },
  {
    "url": "/_nuxt/pages__slug_index.bddd286058b7890205bc.js",
    "revision": "79bbdf71da3fd5c3e67b2db5b3f80790"
  },
  {
    "url": "/_nuxt/pages_index.f4129b3604b4b65a0488.js",
    "revision": "06d5cf358dc861cfb53a8425c5cd2952"
  },
  {
    "url": "/_nuxt/pages_news__slug.75f9a4f5af95a5aa322f.js",
    "revision": "074a76be8e08741185ffd0180e27d74a"
  },
  {
    "url": "/_nuxt/pages_news_index.f2e1439cf726bf7779d5.js",
    "revision": "7a5d1bfe658b30833796fbe4cfe4555c"
  },
  {
    "url": "/_nuxt/vendor.e56304d1774e52147aef.js",
    "revision": "6d72368f1456bd957d427a412221d0fc"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

