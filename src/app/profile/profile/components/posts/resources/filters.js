import moment from 'moment'
/**
 * Filters.
 */
export default {
  /**
   * Round a given amount (currency).
   *
   * @param value
   *
   * @return {string}
   */
  roundAmount (value) {
    return Number(value).toLocaleString(undefined, { style: 'currency', currency: 'usd', minimumFractionDigits: 2 })
  },

  /**
   * Percent localization.
   *
   * @param value
   *
   * @return {string}
   */
  percent (value) {
    return Number(value / 10000).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 0 })
  },

  /**
   * How much time until payout?
   *
   * @param value
   *
   * @return {string}
   */
  humanDate (value) {
    return moment(value).fromNow()
  }
}
