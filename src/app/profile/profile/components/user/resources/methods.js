/**
 * Component methods.
 */
export default {
  /**
   * Format numbers into SI sufixes.
   *
   * @param rawNumber
   * @param digits
   *
   * @return {string}
   */
  nFormatter (rawNumber, digits = 1) {
    const negative = (rawNumber < 0)
    const num = Math.abs(rawNumber)

    let si = [
      { value: 1, symbol: '' },
      { value: 1E3, symbol: 'k' },
      { value: 1E6, symbol: 'M' },
      { value: 1E9, symbol: 'G' },
      { value: 1E12, symbol: 'T' },
      { value: 1E15, symbol: 'P' },
      { value: 1E18, symbol: 'E' }
    ]
    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    let i
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break
      }
    }
    const result = (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol

    return negative ? ('-' + result) : result
  }
}
