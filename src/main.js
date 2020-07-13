import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

//导入 axios 插件
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import './plugins/element.js'

// 导入全部css样式
import './style/base.css'


//引入 icon 文件
import './assets/font/iconfont.js'



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
