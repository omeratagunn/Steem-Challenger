/**
 * Wallet resource methods.
 */
export default {

  /**
   * Convert steem to USD.
   * @param value
   *
   * @return {number}
   */
  convertSteemToUSD (value) {
    return this.steemRateUSD * value
  },

  convertSbdToUSD (value) {
    return this.sbdRateUSD * value
  }
}
