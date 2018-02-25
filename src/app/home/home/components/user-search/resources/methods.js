// imports.
import { searchUsername } from '@/services/steem/account'
import { get } from 'lodash'
/**
 * User search component methods..
 */
export default {
  /**
   * Update search items from a given query string.
   *
   * @param query
   */
  updateItems (query) {
    searchUsername(query).then((results) => {
      this.items = results
    })
  },

  /**
   * Extract label from a given item.
   *
   * @param item
   */
  getLabel (item) {
    return get(item, 'label', null)
  },

  /**
   * Set selected value from event.
   *
   * @param event
   */
  setSelected (event) {
    if (event && get(event, 'label')) {
      this.$emit('selected', get(event, 'label'))
    }
  },

  /**
   * Set selected value from event.
   *
   * @param eventData
   */
  updateQuery (eventData) {
    // set the query.
    this.query = eventData

    // emit the input event.
    this.$emit('input', this.query)
  }
}
