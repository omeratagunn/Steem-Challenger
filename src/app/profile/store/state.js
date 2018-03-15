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
   * List of recent comments by a given user.
   */
  comments: null,

  /**
   * Median history price feed.
   */
  priceFeed: 0.0,

  /**
   * Current rates for pairs.
   */
  rates: {
    steem: { usd: null, btc: null, eth: null },
    sbd: { usd: null, btc: null, eth: null }
  }
}
