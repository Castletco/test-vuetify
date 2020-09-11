import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import App from './App.vue'
import router from './router'
import store from './store'

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
