import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import {store} from './store'

Vue.use(VueMaterial)
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

