/**
 * Profile module.
 *
 * Store getters.
 */
import { get, sumBy } from 'lodash'

// loading state getter.
export const loading = ({ loading }) => loading

// current username.
export const username = ({ username }) => username

// current profile (when loaded).
export const profile = ({ profile }) => profile

// current account info.
export const account = ({ account }) => account

// discussions getter.
export const discussions = ({ discussions }) => discussions

// comments getter.
export const comments = ({ comments }) => comments

// median price feed (3.5 days average).
export const priceFeed = ({ priceFeed }) => priceFeed

// account wallet.
export const wallet = ({ account }) => get(account, '_wallet', {})

// payout.
// @TODO temporary code here.
export const pendingPayoutSum = ({ discussions }) => sumBy(discussions, '_pending_payout_value')

// profile related values.
export const name = ({ profile }) => get(profile, 'name', null)
export const website = ({ profile }) => get(profile, 'website', null)
export const location = ({ profile }) => get(profile, 'location', null)
export const profileImage = ({ username }) => `https://img.busy.org/@${username}`
