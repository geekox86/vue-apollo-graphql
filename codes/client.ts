import Vue, { CreateElement } from 'vue'
import Vuetify from 'vuetify/lib'

// import App from '@/codes/components/app.vue'

Vue.use(Vuetify)

import('@/codes/components/app.vue')
  .then(({ default: App }) => {
    const vuetify = new Vuetify({ icons: { iconfont: 'fa' } })
    const vue = new Vue({
      vuetify,
      render: (h: CreateElement) => h(App)
    })

    vue.$mount('#app')
  })
  .catch((err) => { console.log(err) })

import('@/codes/components/app2.vue')
  .then(({ default: App2 }) => {
    console.log(App2)
  })
