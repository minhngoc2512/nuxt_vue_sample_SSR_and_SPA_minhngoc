const config_env = require("./app/config/env");
const router = require("./router/index");
const config_head = require("./app/config/head");
const isBot = require("isbot");

module.exports = {
  /*
  ** Customize config server to use ENV
  */
  env: config_env.env(),
  /*
 ** Config cache use Workbox
 */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/component-cache',
    // With options
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 * 24 }],
  ],
  /*
  ** Customize config server: ETAG or HTTP2
  */
  render: {
    http2: {
      push: true
    },
    etag: true,
    static: {
      etag: true
    }
  },

  /*
  ** Customize route for page
  */
  router: {
    extendRoutes(routes, resolve) {
      let arrayRouter = router.arrayRouter();
      arrayRouter.map(item => routes.push(item));
    }
  },

  /*
  ** Check user-agent: auto switch SSR or SPA
  */
  serverMiddleware: [
    {
      handler(req, res, next) {
        res.spa = !isBot(req.headers["user-agent"]);
        next();
      }
    }
  ],
  /*
  ** Head of the page
  */
  head: config_head.head(),
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: "red",
    height: "2px",
    duration: 5000
  },
  loadingIndicator: {
    name: "cube-grid",
    color: "#05ff60",
    background: "white"
  },

//config plugins
  plugins:[
    // {src:"~/plugins/axios_cache.js",ssr:true},
  ],

  /*
  ** Build configuration
  */
  build: {
    vendor: ["axios"],
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
