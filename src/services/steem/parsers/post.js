// dependencies.
import { get, toNumber, sumBy, size, map } from 'lodash'

/**
 * Parse a list of beneficiaries and how much they will get (in %).
 *
 * @param post
 *
 * @return {*}
 */
export const parseBeneficiaries = (post) => {
  // extract the beneficiaries list.
  const beneficiariesList = get(post, 'beneficiaries')

  // return the count and the weight.
  return {
    sum: sumBy(beneficiariesList, 'weight'),
    count: size(beneficiariesList),
    who: map(beneficiariesList, (account) => get(account, 'account')).join(',')
  }
}

/**
 * Try to calculate the actual reward a post will give the author.
 *
 * @param post
 * @param pendingPayout
 *
 * @return {*}
 */
export const actualReward = (post, pendingPayout) => {
  // get a percent value for beneficiaries.
  const beneficiariesPercent = (sumBy(get(post, 'beneficiaries', []), 'weight') / 10000)

  // @TODO parse actual curators percent from STEEM rules.
  const curatorsPercent = 0.25

  // take the curator rewards from the pending payout amount.
  const authorAmountWithoutCurators = pendingPayout - (pendingPayout * curatorsPercent)

  // now take the beneficiaries cut.
  const finalSBD = authorAmountWithoutCurators - (authorAmountWithoutCurators * beneficiariesPercent)

  // final SBD / 2 (half is steem power)
  return finalSBD / 2
}

/**
 * Parse profile metadata from JSON string into Object.
 * @param postData
 *
 * @returns {*}
 */
export const parsePost = (postData) => {
  // make a clone.
  const post = Object.assign({}, postData)

  // create a pending payout value.
  const pendingPayout = toNumber(get(post, 'pending_payout_value', '0 SBD').replace(' SBD', ''))

  post._pending_payout_value = pendingPayout
  post._beneficiaries_percent = parseBeneficiaries(post)
  post._actual_pending_reward = actualReward(post, pendingPayout)
  // return the profile key under meta, or just meta if not found.
  return post
}
