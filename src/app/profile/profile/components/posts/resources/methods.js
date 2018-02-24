/**
 * Wallet resource methods.
 */
export default {

  /**
   * SBD to USD conversion.
   *
   * @param value
   *
   * @return {number}
   */
  convertSbdToUSD (value) {
    return this.sbdRateUSD * value
  }
}
