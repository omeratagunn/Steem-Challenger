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
    return Number(value).toLocaleString(undefined, { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 2 })
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
    return moment.utc(value).fromNow()
  },

  /**
   * List a given string value.
   *
   * @param value
   */
  limit (value) {
    return value.substring(0, 30)
  }
}
