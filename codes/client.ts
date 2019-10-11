import Vue, { CreateElement } from 'vue'


import App from '@/codes/components/app.vue'
import apollo from '@/codes/plugins/apollo'
import vuetify from '@/codes/plugins/vuetify'

const vue = new Vue({
  apolloProvider: apollo,
  vuetify,
  render: (h: CreateElement) => h(App)
})

vue.$mount('#app')
