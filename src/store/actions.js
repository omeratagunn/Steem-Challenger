/**
 * Global store actions.
 */

// imports.
import getTicker from '@/services/tickers/getTicker'

/**
 * Default actions export.
 */
export default {
  loadTickers ({getters, commit}) {
    commit('setLoadingTickers', true)
    return getTicker('steem')
      .then(data => { commit('setSteemTicker', data); return data })
      .then(() => getTicker('steem-dollars'))
      .then(data => { commit('setSbdTicker', data); return data })
      .then(() => getTicker('bitcoin'))
      .then(data => { commit('setBtcTicker', data); return data })
      .then(() => getTicker('ethereum'))
      .then(data => { commit('setEthTicker', data); return data })
      .then(() => { commit('setLoadingTickers', false); return true })
  }
}
