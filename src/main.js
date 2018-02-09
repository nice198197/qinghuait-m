import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)

import 'swiper/dist/css/swiper.css'
import '@/common/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
