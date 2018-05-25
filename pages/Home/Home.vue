<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        {{ name }}
      </h1>
      <h2 class="subtitle">
        {{ description }}
      </h2>
      <h2 class="subtitle"><a target="_blank" href="https://www.facebook.com/minh.ngoc.779">Customize by MinhNgoc</a></h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/minhngoc2512/nuxt_vue_sample_SSR_and_SPA_minhngoc"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  name:'home',
  async asyncData({store,redirect}){

  },
  data (){
    return{
        name:'Nuxt.js',
        description:'Sample Project Nuxt.js -  SSR and SPA '

    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.subtitle a{
  text-decoration: none;
  color: #45b883;
}

.links {
  padding-top: 15px;
}
</style>
