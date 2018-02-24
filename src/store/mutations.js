/**
 * Global store mutations.
 */
export default {
  /**
   * Loading tickers state mutation.
   *
   * @param state
   * @param loading
   */
  setLoadingTickers (state, loading) {
    // define a boolean loading value into state.
    state.loadingTickers = !!loading
  },

  /**
   * Steem ticker state mutation.
   *
   * @param state
   * @param tickerData
   */
  setSteemTicker (state, tickerData) {
    // set the object into state..
    state.steemTicker = tickerData
  },

  /**
   * Steem Dollars ticker state mutation.
   *
   * @param state
   * @param tickerData
   */
  setSbdTicker (state, tickerData) {
    // set the object into state..
    state.sbdTicker = tickerData
  },

  /**
   * Bitcoin ticker state mutation.
   *
   * @param state
   * @param tickerData
   */
  setBtcTicker (state, tickerData) {
    // set the object into state..
    state.btcTicker = tickerData
  },

  /**
   * Ethereum ticker state mutation.
   *
   * @param state
   * @param tickerData
   */
  setEthTicker (state, tickerData) {
    // set the object into state..
    state.ethTicker = tickerData
  }
}
