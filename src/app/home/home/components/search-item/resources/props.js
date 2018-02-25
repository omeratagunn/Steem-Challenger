/**
 * Search item properties.
 */
export default {
  /**
   * Item to render.
   */
  item: {
    type: Object,
    default: () => ({ id: null, username: null })
  },

  /**
   * Current query text.
   */
  searchText: {
    type: String,
    default: null
  }
}
