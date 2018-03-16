/**
 * Profile module.
 *
 * Store actions.
 */

import { account, discussions, priceFeed } from 'src/services/steem'
import { get, filter, isString, uniq } from 'lodash'
import storage from 'src/services/storage'

export default {
  loadUserByUsername ({ getters, commit, dispatch }, username) {
    // start by setting as loading.
    commit('setLoading', true)
    // set the current username on state.
    commit('setUsername', username)

    return account.getAccount(username)
      .then((account) => {
        dispatch('saveHistory', username)
        commit('setAccount', account)
        commit('setProfile', get(account, '_profile'))
        commit('setLoading', false)

        return account
      })
      .then((account) => discussions.getByComments(username))
      .then((comments) => { commit('setComments', comments); return comments })
      .then(() => discussions.getByBlog(username))
      .then((discussions) => { commit('setDiscussions', discussions); return discussions })
      .then(() => priceFeed.getMedianHistoryPrice())
      .then((feed) => {
        commit('setPriceFeed', feed)
        return feed
      })
  },

  /**
   * Save an account on the local storage data.
   *
   * @param getters
   * @param commit
   * @param username
   */
  saveHistory ({ getters, commit }, username) {
    const accounts = filter((storage.get('accounts') || []), isString)
    accounts.unshift(username)
    const limitedAccounts = uniq(accounts).slice(0, 5)

    return storage.set('accounts', limitedAccounts)
  }
}
