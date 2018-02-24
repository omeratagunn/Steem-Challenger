// dependencies.
import { get, toNumber } from 'lodash'
/**
 * Global store getters.
 */

// Steem ticket getter
export const steemTicker = ({ steemTicker }) => steemTicker

// Steem dollars ticker.
export const sbdTicker = ({ sbdTicker }) => sbdTicker

// Bitcoin ticker.
export const btcTicker = ({ btcTicker }) => btcTicker

// Bitcoin ticker.
export const ethTicker = ({ ethTicker }) => ethTicker

// current USD rate for steem.
export const steemRateUSD = ({ steemTicker }) => steemTicker ? toNumber(get(steemTicker, 'price_usd', 0)) : 0

// current USD rate for steem dollars.
export const sbdRateUSD = ({ sbdTicker }) => sbdTicker ? toNumber(get(sbdTicker, 'price_usd', 0)) : 0
