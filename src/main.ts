import Vue from 'vue'
import App from './App.vue'

import Vulma from './plugins/vulma'

import DialogProgrammtic from './components/Components/Dialog'

Vue.config.productionTip = false

Vue.use(Vulma);

(window as any).$dialog = DialogProgrammtic

new Vue({
  render: h => h(App)
}).$mount('#app')
