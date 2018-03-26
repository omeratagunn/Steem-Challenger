// import modules.
import { routes as profile } from './profile'
import { routes as home } from './home'

/**
 * STEEM.SHOW.
 *
 * Export all modules routes.
 */
export default [
  ...home,
  ...profile
]
