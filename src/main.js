import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/tailwind.css'
import store from './store'


Vue.use(Vant);
Vue.config.productionTip = false
Vue.config.devtools=true
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
