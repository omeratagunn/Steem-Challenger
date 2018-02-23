// import libraries
import Vue from 'vue'
import Vuex from 'vuex'

// import global global resources.
import state from './state'
import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'

// import module resources.
import modules from './modules'

// setup vuex on vue.
Vue.use(Vuex)

// create a store.
const store = new Vuex.Store({
  strict: false,
  state,
  mutations,
  getters,
  actions,
  modules
})

// export the vuex store.
export default store
