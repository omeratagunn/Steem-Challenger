// dependencies.
import { mapGetters } from 'vuex'
import { filter, sortBy, sumBy } from 'lodash'

/**
 * Computed properties.
 */
export default {
  /**
   * Profile store getters.
   */
  ...mapGetters('app/profile', [
    'loading',
    'username',
    'wallet',
    'discussions'
  ]),

  /**
   * Global getters.
   */
  ...mapGetters([
    'steemRateUSD',
    'sbdRateUSD'
  ]),

  /**
   * Filter and order the discussions to include only the ones
   * with a pending payout..
   *
   * @return {*}
   */
  pendingDiscussions () {
    // filter with positive pending payout values.
    const pendingOnly = filter(this.discussions, (post) => {
      return post._pending_payout_value > 0
    })

    // sort the closest payout posts first.
    return sortBy(pendingOnly, ['cashout_time'])
  },

  /**
   * Count on the total pending discussions.
   *
   * @return {number}
   */
  pendingDiscussionsCount () {
    return this.pendingDiscussions.length
  },

  /**
   * Sum all pending payouts to display a total pending rewards.
   *
   * @return {*}
   */
  totalPayout () {
    return sumBy(this.pendingDiscussions, '_actual_pending_reward')
  }
}
