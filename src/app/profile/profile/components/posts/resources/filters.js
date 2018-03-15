import moment from 'moment'
import { toString } from 'lodash'
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
   * Local date time format.
   *
   * @param value
   *
   * @return {string}
   */
  localDate (value) {
    return moment.utc(value).calendar()
  },

  /**
   * List a given string value.
   *
   * @param value
   */
  limit (value) {
    const limit = toString(value)

    return (limit.length > 150) ? (limit.substring(0, 147) + '...') : limit
  }
}
