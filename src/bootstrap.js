import { sync } from 'vuex-router-sync' // router sync.
import lodash from 'lodash'
/**
 * Bootstrap configuration and legacy plugins.
 *
 * @param Vue
 * @param store
 * @param router
 */
export default (Vue, store, router) => {
  // disable production tip when on development.
  Vue.config.productionTip = false

  // make sure store and router are in sync.
  sync(store, router)

  // required lodash and mame it globally available
  window._ = window.lodash = lodash

  // require jquery and make it globally available
  window.$ = window.jQuery = require('jquery')

  // require steem for debug.
  window.$steem = require('@steemit/steem-js')

  // require bootstrap strings
  require('bootstrap')
}
