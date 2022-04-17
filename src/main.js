import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import router from './router'
// 全局工具函数
import { parseTime } from "./utils/time"
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);

// 注册全局函数--多个
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })
Vue.filter("parseTime", parseTime)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
