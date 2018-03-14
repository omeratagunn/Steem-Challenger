/**
 * Profile module.
 *
 * Store actions.
 */

import { account, discussions } from 'src/services/steem'
import { get } from 'lodash'

export default {
  loadUserByUsername ({ getters, commit }, username) {
    // start by setting as loading.
    commit('setLoading', true)
    // set the current username on state.
    commit('setUsername', username)

    return account.getAccount(username)
      .then((account) => {
        commit('setAccount', account)
        commit('setProfile', get(account, '_profile'))
        commit('setLoading', false)

        return account
      })
      .then((account) => {
        return discussions.getByComments(username)
      })
      .then((comments) => {
        commit('setComments', comments)

        return comments
      })
      .then(() => {
        return discussions.getByBlog(username)
      })
      .then((discussions) => {
        commit('setDiscussions', discussions)

        return discussions
      })
  }
}
