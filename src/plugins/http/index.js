// dependencies.
import axios from 'axios'

// create a axios client for the api.
export const http = axios.create()

// plugin install.
export default function install (Vue, {store, router}) {
  // define $http into vue prototype.
  Object.defineProperty(Vue.prototype, '$http', {
    get () {
      return http
    }
  })
}
