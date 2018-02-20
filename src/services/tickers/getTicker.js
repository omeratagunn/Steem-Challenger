import { http } from 'src/plugins/http'
import { isArray } from 'lodash'

/**
 * Simple extract data from result.
 *
 * @param data
 *
 * @return {*}
 */
const extractResult = ({ data }) => {
  if (isArray(data) && data.length > 0) {
    return data[0]
  }

  return null
}

/**
 * Generate the search URL.
 *
 * @param tokenName
 *
 * @return {string}
 */
const generateUrl = (tokenName) => `https://api.coinmarketcap.com/v1/ticker/${tokenName}/?convert=USD`

/**
 * Gets the ticker for a given key-pair from Coinmarketcap.
 *
 * @param tokenName
 *
 */
export default (tokenName) => http.get(generateUrl(tokenName)).then(extractResult)
