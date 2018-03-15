// dependencies.
import steem from '@steemit/steem-js'
import { get, toNumber } from 'lodash'

/**
 * Look up an account list on steem.
 *
 * @return {Promise<any>}
 */
export const getMedianHistoryPrice = () => {
  // return results using a promise.
  return new Promise((resolve, reject) => {
    // call the getAccounts method.
    return steem.api.getCurrentMedianHistoryPrice((error, result) => {
      // error handling.
      if (error) {
        // reject errors
        return reject(error)
      } else {
        // get the value
        const valueString = get(result, 'base', '0 SBD').replace(' SBD', '')

        // resolve result.
        return resolve(toNumber(valueString))
      }
    })
  })
}

/**
 * Default export.
 */
export default {
  getMedianHistoryPrice
}
