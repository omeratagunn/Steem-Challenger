// imports.
import { isString } from 'lodash'

/**
 * Home component methods.
 */
export default {
  /**
   * Redirect the current username to the show page.
   */
  redirect (value) {
    // get username from query or event.
    const username = (value && isString(value)) ? value : this.query

    // push the route.
    this.$router.push({ name: 'profile', params: { username } })
  },

  /**
   * Update query value from inner component.
   *
   * @param value
   */
  updateQuery (value) {
    // update the field.
    this.query = value
  }
}
