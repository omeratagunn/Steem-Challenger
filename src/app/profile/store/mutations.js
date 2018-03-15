/**
 * Profile module.
 *
 * Store mutations.
 */

import { isEmpty } from 'lodash'

export default {
  /**
   * Loading state mutation.
   *
   * @param state
   * @param loading
   */
  setLoading (state, loading) {
    // define a boolean loading value into state.
    state.loading = !!loading
  },

  /**
   * Username mutation.
   *
   * @param state
   * @param username
   */
  setUsername (state, username) {
    // set the username, if not empty.
    if (!isEmpty(username)) {
      state.username = username
    }
  },

  /**
   * Account mutation.
   *
   * @param state
   * @param account
   */
  setAccount (state, account) {
    // set the account, if not empty.
    if (!isEmpty(account)) {
      state.account = account
    }
  },

  /**
   * Discussions state mutation.
   *
   * @param state
   * @param discussions
   */
  setDiscussions (state, discussions) {
    // set on state.
    state.discussions = discussions
  },

  /**
   * Comments state mutation.
   *
   * @param state
   * @param comments
   */
  setComments (state, comments) {
    // set on state.
    state.comments = comments
  },

  /**
   * Price Feed mutation.
   *
   * @param state
   * @param priceFeed
   */
  setPriceFeed (state, priceFeed) {
    // set on state.
    state.priceFeed = priceFeed
  },

  /**
   * Account profile mutation.
   *
   * @param state
   * @param profile
   */
  setProfile (state, profile) {
    // set the username, if not empty.
    if (!isEmpty(profile)) {
      state.profile = profile
    }
  }
}
