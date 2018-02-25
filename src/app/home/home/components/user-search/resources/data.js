// imports.
import chUserSearchItem from '@/app/home/home/components/search-item/item'

/**
 * Data factory function.
 *
 * @return {{}}
 */
export default function () {
  /**
   * Data object return.
   */
  return {
    /**
     * Current search query.
     */
    query: null,

    /**
     * List of available items.
     */
    items: [],

    /**
     * Current selected item.
     */
    current: null,

    /**
     * Child component that will render items on the search list.
     */
    template: chUserSearchItem
  }
}
