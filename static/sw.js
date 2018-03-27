importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wordpress-nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/8.17a97405179a245d20f5.js",
    "revision": "b625bf373a6367e15fd107b1494f5c2f"
  },
  {
    "url": "/_nuxt/app.53345f029c82e49fc111.js",
    "revision": "bd2fd2c0cb493d41947ffb0ccb6d2537"
  },
  {
    "url": "/_nuxt/layouts_default.b98d145d8b62489a6be5.js",
    "revision": "6e2882f27ff8e91b40e4f45810f9354c"
  },
  {
    "url": "/_nuxt/manifest.41a71e467d3995d69207.js",
    "revision": "6e18a6b1004ab644b71011dfd2b3eedb"
  },
  {
    "url": "/_nuxt/pages__slug__subSlug.f28b9d18f2bc51d427ae.js",
    "revision": "0d145e04682ed1f54f0e70308ba81f60"
  },
  {
    "url": "/_nuxt/pages__slug_index.5f2392f8a9823bd3c574.js",
    "revision": "73834ae0580ce9c448f1ee3a4343f0c7"
  },
  {
    "url": "/_nuxt/pages_index.5a3bca399c341e83308c.js",
    "revision": "e4ff3e6aa746d48a86aae45db61085cd"
  },
  {
    "url": "/_nuxt/pages_news__slug.063a0bc9d87aca894d84.js",
    "revision": "31054a01aedefaa107c21948f866c426"
  },
  {
    "url": "/_nuxt/pages_news_index.2f057f6e9b86971f5c4b.js",
    "revision": "6e7b644ff2dd863e389230f4cf3ffde3"
  },
  {
    "url": "/_nuxt/vendor.c45130919fda0bb54f05.js",
    "revision": "bef9f8e2add70cfc560646f9460cdfda"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

