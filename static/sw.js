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
    "url": "/_nuxt/9.8af1ecd3dd45842c73ed.js",
    "revision": "94b103eca4d489e7511038be5a26a86f"
  },
  {
    "url": "/_nuxt/app.bb72d3272f387608053c.js",
    "revision": "98b9eadbb7e7adcaf1415fd73671b7be"
  },
  {
    "url": "/_nuxt/layouts_default.66855b59f1228844a5d7.js",
    "revision": "c1c2857cbeff0941d5c84c1e1efc09c3"
  },
  {
    "url": "/_nuxt/manifest.14327f3e816c08bc9f4d.js",
    "revision": "a83ef221843d6407b0bfe09ada55b03e"
  },
  {
    "url": "/_nuxt/pages__slug__subSlug.27e6b49206f281d9c207.js",
    "revision": "2b49092070cf492e0adf0a5e9f2cb018"
  },
  {
    "url": "/_nuxt/pages__slug_index.ba6a092316234ed9c1ad.js",
    "revision": "6bac7f622ab1d51031f0dada7968a0cc"
  },
  {
    "url": "/_nuxt/pages_index.1be706f457aeb52715b7.js",
    "revision": "d2e77410f3fadc8b0ae68d9714cea865"
  },
  {
    "url": "/_nuxt/pages_news__slug.19d77505804eb1bda6ca.js",
    "revision": "6e23ba2108033fb721f0f046432d1153"
  },
  {
    "url": "/_nuxt/pages_news_index.5502dfdfdb3ece10c278.js",
    "revision": "83e030a39463b596dfebcc4428c748b8"
  },
  {
    "url": "/_nuxt/vendor.e56304d1774e52147aef.js",
    "revision": "6d72368f1456bd957d427a412221d0fc"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

