import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import ErrorHandlerPlugin from './services/errorHandler'

Vue.use(BootstrapVue)
Vue.use(VeeValidate)
Vue.use(ErrorHandlerPlugin)

Vue.config.productionTip = false
Vue.config.performance = true

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    if (this.$route.meta.requiresAuthentication && !store.getters.token) {
      router.push({ name: 'login' })
    }
  }
}).$mount('#app')

// navigation guards
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuthentication)

  if (requiresAuth && !store.getters.token) {
    next({ name: 'login' })
  } else {
    next()
  }
})
