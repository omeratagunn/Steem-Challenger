/**
 * Profile module.
 *
 * Store state.
 */
export default {
  /**
   * Loading state.
   */
  loading: true,

  /**
   * Current username.
   */
  username: null,

  /**
   * Current account.
   */
  account: null,

  /**
   * Current account profile.
   */
  profile: null,

  /**
   * List of recent discussions on a given user.
   */
  discussions: null,

  /**
   * Current rates for pairs.
   */
  rates: {
    steem: { usd: null, btc: null, eth: null },
    sbd: { usd: null, btc: null, eth: null }
  }
}
