// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/layout/app'
import router from './router'
import store from './store'
import plugins from './plugins'
import bootstrap from './bootstrap'

// bootstrap resources.
bootstrap(Vue, store, router)
// boot plugins.
plugins(Vue, store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
