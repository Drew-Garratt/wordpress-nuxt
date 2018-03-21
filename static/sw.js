importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wordpress-nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.5cb4112bebea81d60280.js",
    "revision": "4f31a16d2deea2910ddaa9b8f46331ef"
  },
  {
    "url": "/_nuxt/layouts_default.a4d8a5645dfea2733013.js",
    "revision": "1498432d67b2b4a463f672929d5cfce0"
  },
  {
    "url": "/_nuxt/manifest.49422371a135e7b4f5ef.js",
    "revision": "316f1a4660115ec57d60b54aa9fb835f"
  },
  {
    "url": "/_nuxt/pages_index.38c8be975ddf3d84141c.js",
    "revision": "b71c9f29810feaced586ea28f6e3c993"
  },
  {
    "url": "/_nuxt/vendor.e5432bd2b8d4f2e787e1.js",
    "revision": "9084584c6c6a1f46bab7f59e79b351b6"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

