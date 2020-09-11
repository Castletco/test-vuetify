import Vue from 'vue'
import Vuetify from 'vuetify'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBFANJOyuojnHmza5MPJQ3i5Ni9uzVjIz4',
  authDomain: 'test-vuetify-fd1db.firebaseapp.com',
  databaseURL: 'https://test-vuetify-fd1db.firebaseio.com',
  projectId: 'test-vuetify-fd1db',
  storageBucket: 'test-vuetify-fd1db.appspot.com',
  messagingSenderId: '630918733553',
  appId: '1:630918733553:web:618e8f3af8d6d947bb1350'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })

Vue.use(Vuetify, {
  // theme: {
  //   primary: '#ee44aa'
  // }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
