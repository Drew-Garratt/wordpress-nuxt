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
    "url": "/_nuxt/manifest.2f97de71cf1487e0fda8.js",
    "revision": "26023056228bc9c296624546da386a2f"
  },
  {
    "url": "/_nuxt/pages__slug__subSlug.82d4682f3a3ade772ace.js",
    "revision": "6fea15b6c836f1055b48752643f6f4b5"
  },
  {
    "url": "/_nuxt/pages__slug_index.af27d2589d5a51a3fdb8.js",
    "revision": "cbff264d9cd1a66a44959bfd1401d761"
  },
  {
    "url": "/_nuxt/pages_index.d034d9490b28d7edbc75.js",
    "revision": "0b215053fd8766291b2a5b43b0504458"
  },
  {
    "url": "/_nuxt/pages_news__slug.087a6f767aeb073a301a.js",
    "revision": "e3a09f3467e92ae3d9a8c4181c7c8f1a"
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

workboxSW.router.registerRoute(new RegExp('https://nuxt.cunning.as/wp-json/.*'), workboxSW.strategies.networkFirst({"cacheName":"wordpress","cacheExpiration":{"maxEntries":50,"maxAgeSeconds":300}}), 'GET')

workboxSW.router.registerRoute(new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'), workboxSW.strategies.cacheFirst({"cacheName":"googlefonts"}), 'GET')

workboxSW.router.registerRoute(new RegExp('/\.(?:png|gif|jpg|jpeg|svg)$/'), workboxSW.strategies.networkFirst({"cacheName":"images","cacheExpiration":{"maxEntries":60,"maxAgeSeconds":86400}}), 'GET')

