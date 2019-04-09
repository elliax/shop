const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css' }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js' },
      { src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js', id: 'snipcart', 'data-api-key': 'ZjcxOTQwMDEtYmNmMy00ZmI0LThmYTUtZTgxNzU4OTNjZTg5NjM2OTA0MDU3MzExMDQ1MjQy' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components',
    '~/plugins/filters'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['storyblok-nuxt', {accessToken: 'wtasg5I1v8TVSHb5A8QV7gtt', cacheProvider: 'memory'}]
  ],

  /*
  ** Router middleware
  */
  router: {
    middleware: 'setCacheVersion'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
