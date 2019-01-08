import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import firebase from 'firebase'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDQsd6rwdTVOF14mbfyhZTgtI2rLx5QOXE",
  authDomain: "paradigm-a1bc9.firebaseapp.com",
  databaseURL: "https://paradigm-a1bc9.firebaseio.com",
  projectId: "paradigm-a1bc9",
  storageBucket: "paradigm-a1bc9.appspot.com",
  messagingSenderId: "728943503114"
})

new Vue({
  data: {
    return: {
      app: ''
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
