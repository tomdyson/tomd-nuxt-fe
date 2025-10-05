export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  // mode: "universal",
  ssr: "false",
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: "static",
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || "",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
    script: [
      {
        src: "https://umami.co.tomd.org/script.js",
        defer: true,
        "data-website-id": "b05b00e9-e212-4a7d-9ca1-9610308b22fa"
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
     { src: '~/plugins/umami-tracker.js', mode: 'client' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Convert internal links to nuxt links
    // https://dev.to/wearethreebears/handle-api-driven-content-links-in-nuxt-js-3afj
    "nuxt-interpolation",
    "@nuxt/http",
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {},
  env: {
    baseApiUrl: process.env.BASE_API_URL ||
      "https://wagtail-tomd.fly.dev/api/v2",
  },
};
