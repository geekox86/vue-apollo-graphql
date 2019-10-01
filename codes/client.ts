import Vue, { CreateElement } from 'vue'
import Vuetify from 'vuetify/lib'

import App from '@/codes/components/app.vue'

Vue.use(Vuetify)

const vuetify = new Vuetify({ icons: { iconfont: 'fa' } })
const vue = new Vue({
  vuetify,
  render: (h: CreateElement) => h(App)
})

vue.$mount('#app')
