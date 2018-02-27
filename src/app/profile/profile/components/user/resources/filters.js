/**
 * Filters.
 */
export default {
  percent (value) {
    return Number(value / 10000).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
  },

  steemPower (value) {
    return Number(value).toLocaleString(undefined, { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 3 })
  }
}
