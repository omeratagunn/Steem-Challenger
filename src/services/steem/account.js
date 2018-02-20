// dependencies.
import steem from '@steemit/steem-js'
import { get, toArray, isArray } from 'lodash'
import { parseProfile } from '@/services/steem/parsers/profile'

/**
 * Look up an account list on steem.
 *
 * @param accountsList
 * @return {Promise<any>}
 */
export const getAccounts = (accountsList) => {
  // return results using a promise.
  return new Promise((resolve, reject) => {
    // call the getAccounts method.
    return steem.api.getAccounts(toArray(accountsList), (error, result) => {
      // error handling.
      if (error) {
        // reject errors
        return reject(error)
      } else {
        // resolve result.
        return resolve(result)
      }
    })
  })
}

/**
 * Retrieve a single account from steem.
 *
 * @param username
 *
 * @return {Promise<any>}
 */
export const getAccount = (username) => {
  // make the username into an array.
  const accountList = []
  accountList.push(username)

  // run the multiple method.
  return getAccounts(accountList).then((accounts) => {
    // if an account was returned.
    if (isArray(accounts) && accounts.length > 0) {
      // get the first account.
      const account = accounts[0]
      // parse the account profile with the helper (stub.)
      account._profile = parseProfile(get(account, 'json_metadata'))

      // resolve the promise and return.
      return Promise.resolve(account)
    } else {
      // reject with not found message.
      return Promise.reject(new Error('STEEM_ACCOUNT_NOT_FOUND'))
    }
  })
}

/**
 * Default export.
 */
export default {
  getAccount,
  getAccounts
}
