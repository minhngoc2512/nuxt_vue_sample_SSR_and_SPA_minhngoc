const config = require("./app/config/index");
const router = require("./router/index");
const isBot = require("isbot");
module.exports = {
  /*
  ** Custom route for page in app
  */
  router: {
    extendRoutes(routes, resolve) {
      let arrayRouter = router.arrayRouter();
      arrayRouter.map(item => routes.push(item));
    }
  },
  /*
  ** Check user-agent
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
  ** Headers of the page
  */
  head: {
    title: "Sample Project Nuxt.js -  SSR and SPA",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "{{escape description }}"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
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
  /*
  ** Build configuration
  */
  build: {
    vendor: ["axios"],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
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
