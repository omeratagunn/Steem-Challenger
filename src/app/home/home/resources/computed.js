// dependencies.
import storage from 'src/services/storage'
/**
 * Computed properties.
 */
export default {
  /**
   * Recent user searches.
   */
  recentUsers () {
    return storage.get('accounts') || []
  }
}
