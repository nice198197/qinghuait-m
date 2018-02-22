import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
import Cube from 'cube-ui'
 
Vue.use(Cube)
Vue.use(VueResource)

import '@/common/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
