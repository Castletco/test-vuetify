import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    userIsAuthenticated: false,
    QUERY_PrimaryRelativeCaregiverById: false,
    current_PrimaryRelativeCaregiver: false,
    current_PrimaryRelativeCaregivers: false
  },
  mutations: {
    setUserIsAuthenticated (state, replace) {
      state.userIsAuthenticated = replace
    },
    setUser (state, replace) {
      state.user = replace
    }
  },
  actions: {
    login (context, credentials) {
      firebase.auth().signInWithEmailAndPassword(credentials.username, credentials.password)
        .then(data => {
          console.log('Logged In')
          router.push('/dashboard')
        })
        .catch(e => {
          console.log('Login failed: ', e)
          alert(e.message)
        })
    },
    logout (context) {
      firebase.auth().signOut()
        .then(data => {
          console.log('Logged out')
          router.push('/login')
        })
        .catch(e => {
          console.log('Logout failed: ', e)
          alert(e.message)
        })
    }
  },
  modules: {
  }
})
