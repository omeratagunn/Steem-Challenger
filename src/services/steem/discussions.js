// dependencies.
import steem from '@steemit/steem-js'
import { parsePost } from './parsers/post'
import { map, filter } from 'lodash'

/**
 * Get the discussions on a given blog/username.
 *
 * @param username
 * @param limit
 *
 * @return {Promise<any>}
 */
export const getByBlog = (username, limit = 50) => {
  // create a query object to become JSON search/
  const query = { tag: username, limit }

  // return results using a promise.
  return new Promise((resolve, reject) => {
    // call the discussion search.
    return steem.api.getDiscussionsByBlog(query, (error, result) => {
      // error handling.
      if (error) {
        // reject errors
        return reject(error)
      } else {
        // resolve result.
        return resolve(filter(map(result, parsePost), { author: username }))
      }
    })
  })
}

/**
 * Default export.
 */
export default {
  getByBlog
}
