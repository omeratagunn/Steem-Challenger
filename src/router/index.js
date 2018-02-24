import Vue from 'vue'
import Router from 'vue-router'
import { routes } from 'src/app'

Vue.use(Router)

export default new Router({
  routes,
  mode: 'history'
})
