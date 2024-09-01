import './assets/css/main.css'
import './assets/css/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from '@tsparticles/vue3'
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim' // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VueEasyLightbox from 'vue-easy-lightbox'

declare module '@tsparticles/vue3'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueEasyLightbox)
app.use(Particles, {
  init: async (engine) => {
    // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
    await loadSlim(engine) // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
  }
})

app.mount('#app')
