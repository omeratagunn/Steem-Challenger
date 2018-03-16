/**
 * Get an item from local storage.
 * @param key
 * @return {null}
 */
export const get = (key) => {
  const stored = window.localStorage.getItem(key)
  console.log(stored)
  return stored ? JSON.parse(stored) : null
}

/**
 * Set an item on local storage.
 *
 * @param key
 * @param data
 *
 * @return {string | null}
 */
export const set = (key, data) => {
  const serialized = JSON.stringify(data)

  window.localStorage.setItem('accounts', serialized)

  return get(key)
}

/**
 * Default export.
 */
export default {
  set,
  get
}
