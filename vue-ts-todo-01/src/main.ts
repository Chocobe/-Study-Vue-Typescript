import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from "@vue/composition-api";

import "@assets/styles/common.scss";

Vue.config.productionTip = false
Vue.use(VueCompositionAPI);

new Vue({
  render: h => h(App),
}).$mount('#app')
