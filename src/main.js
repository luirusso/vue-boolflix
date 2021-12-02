import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/scss/bootstrap.scss';
import './styles/globals.scss'
import './styles/utilities.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
