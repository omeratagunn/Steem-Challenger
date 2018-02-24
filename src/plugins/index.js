// import plugins
import http from 'src/plugins/http'

/**
 * Default export.
 *
 * @param Vue
 * @param store
 * @param router
 */
export default (Vue, store, router) => {
  // setup http
  Vue.use(http, { store, router })
}
