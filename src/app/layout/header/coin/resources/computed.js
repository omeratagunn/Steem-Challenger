// dependencies.
import { get } from 'lodash'

/**
 * Default computed properties export.
 */
export default {
  /**
   * Detect the price movement for a given coin on the last 24 hours as fall or rise.
   *
   * @return {boolean}
   */
  isFalling () {
    // get last 24hours change.
    const change = get(this.ticker, 'percent_change_24h', 0)

    // return true is the change was negative.
    return change < 0
  }
}
