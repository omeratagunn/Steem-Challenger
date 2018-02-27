/**
 * Filters.
 */
export default {
  roundAmount (value) {
    return Number(value).toLocaleString(undefined, { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 2 })
  }
}
