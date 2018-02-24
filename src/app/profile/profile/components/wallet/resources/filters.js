/**
 * Filters.
 */
export default {
  roundAmount (value) {
    return Number(value).toLocaleString(undefined, { style: 'currency', currency: 'usd', minimumFractionDigits: 2 })
  }
}
