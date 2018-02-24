/**
 * Filters.
 */
export default {
  percent (value) {
    return Number(value / 10000).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
  }
}
