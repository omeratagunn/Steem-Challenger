import { get } from 'lodash'
import steem from '@steemit/steem-js/lib/index'

/**
 * Format a given account vesting shares into SP.
 *
 * @param vestingShares
 * @return {Promise<any>}
 */
export const getSteemPower = (vestingShares) => {
  // return results using a promise.
  return new Promise((resolve, reject) => {
    // call the dynamic search.
    return steem.api.getDynamicGlobalProperties((error, result) => {
      // stop if error.
      if (error) {
        return reject(error)
      } else {
        // get both total vesting shares and total vesting fund from dynamic methods.
        const totalVestingShares = get(result, 'total_vesting_shares')
        const totalVestingFundSteem = get(result, 'total_vesting_fund_steem')

        // format the steem power based on the vests.
        const steemPower = steem.formatter.vestToSteem(vestingShares, totalVestingShares, totalVestingFundSteem)

        // resolve the the formatted value
        return resolve(steemPower)
      }
    })
  })
}
