// dependencies.
import { get, toNumber, isString } from 'lodash'

/**
 * Clear currency formatting from account values.
 * (Remove units from the amount and parse as float.)
 *
 * @param value
 *
 * @return {*}
 */
const toSteemCurrency = (value) => isString(value) ? toNumber(value.replace(' SBD', '').replace(' STEEM', '')) : 0

/**
 * Extract balance from a given account attribute.
 *
 * @param account
 * @param type
 *
 * @return {*}
 */
const extractBalance = (account, type) => toSteemCurrency(get(account, type, ''))

/**
 * Parse account wallet information.
 *
 * @param account
 *
 * @returns {*}
 */
export const parseWallet = (account) => {
  // start a wallet object.
  const wallet = {}

  // parse the wallet balance (hot)
  wallet.balance = {
    steem: extractBalance(account, 'balance'),
    sbd: extractBalance(account, 'sbd_balance')
  }

  // parse the wallet balance (savings).
  wallet.savings = {
    steem: extractBalance(account, 'savings_balance'),
    sbd: extractBalance(account, 'savings_sbd_balance')
  }

  // make a quick sum.
  wallet.totals = {
    steem: wallet.balance.steem + wallet.savings.steem,
    sbd: wallet.balance.sbd + wallet.savings.sbd
  }

  // return the just built wallet object.
  return wallet
}
