// dependencies.
import steem from '@steemit/steem-js'
import { get, toArray, isArray, map } from 'lodash'
import { parseProfile } from '@/services/steem/parsers/profile'
import { parseWallet } from '@/services/steem/parsers/wallet'
import { getSteemPower } from '@/services/steem/parsers/vests'

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
      // parse wallet information.
      account._wallet = parseWallet(account)

      // resolve the promise and return.
      return getSteemPower(account.vesting_shares).then(v => {
        account._sp = v
      }).then(() => getSteemPower(account.delegated_vesting_shares).then(v => {
        account._delegated_sp = (v * -1)
      })).then(() => getSteemPower(account.received_vesting_shares).then(v => {
        account._received_sp = v
      })).then(() => Promise.resolve(account))
    } else {
      // reject with not found message.
      return Promise.reject(new Error('STEEM_ACCOUNT_NOT_FOUND'))
    }
  })
}

/**
 * Search by username (partial).
 *
 * @param partialQuery
 * @param limit
 *
 * @return {*}
 */
export const searchUsername = (partialQuery, limit = 5) => {
  // avoid bigger limits by client code.
  const localLimit = (limit > 5) ? 5 : limit

  const fixName = (name) => ({ id: name, label: name })

  // do the query.
  return new Promise((resolve, reject) => {
    return steem.api.lookupAccounts(partialQuery, localLimit, (err, result) => {
      if (!err) {
        return resolve(map(result, fixName))
      } else {
        return reject(err)
      }
    })
  })
}

/**
 * Default export.
 */
export default {
  getAccount,
  getAccounts,
  searchUsername
}
