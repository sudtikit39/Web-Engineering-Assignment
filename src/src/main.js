import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'
import {store} from './store'
import firebase from 'firebase'
import {firebaseConfig} from './config'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)


Vue.use(Vuetify)
var provider = new firebase.auth.FacebookAuthProvider();
firebase.initializeApp(firebaseConfig)

 export default {
    data() {
      return {
        email: '',
        password: '',
        passwordConfirm: '',
        alert: false
      }
    }
  }




Vue.config.productionTip = false

/* eslint-disable no-new */

const unsubscribe = firebase
  .auth()
  .onAuthStateChanged((firebaseUser) => {
    new Vue({
      el: '#app', router, store, template: '<App/>', components: {
        App
      },
      created() {
        store.dispatch('autoSignIn', firebaseUser)
      }
    })
    unsubscribe()
  })
