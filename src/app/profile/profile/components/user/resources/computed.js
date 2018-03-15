import { get } from 'lodash'
import { mapGetters } from 'vuex'

export default {
  ...mapGetters('app/profile', [
    'loading',
    'username',
    'account',
    'profile',
    'name',
    'website',
    'location',
    'profileImage'
  ]),

  /**
   * Calculate the amount of stars.
   */
  vests () {
    const ownVests = parseFloat(get(this.account, 'vesting_shares', '0 VESTS').replace(' VESTS', ''))
    // const receivedVests = toNumber(get(this.account, 'received_vesting_shares', '0 VESTS').replace(' VESTS', ''))
    // const delegatedVests = toNumber(get(this.account, 'delegated_vesting_shares', '0 VESTS').replace(' VESTS', ''))

    // return Math.floor(ownVests + receivedVests + delegatedVests)
    return Math.floor(ownVests)
  },

  rank () {
    // get the vests number.
    const vests = this.vests

    // under a million vests.
    if (vests < (10 * 10 * 10 * 1000)) {
      return 'Plankton'
    }

    // under 10 million vests.
    if (vests < (10 * 10 * 10 * 10 * 1000)) {
      return 'Minnow'
    }

    // under 100 million vests.
    if (vests < (10 * 10 * 10 * 10 * 10 * 1000)) {
      return 'Dolphin'
    }

    // under 1 billion vests:
    if (vests < (10 * 10 * 10 * 10 * 10 * 10 * 1000)) {
      return 'Orca'
    }

    // anything above that is a whale.
    return 'Whale'
  }
}
