// dependencies.
import { get } from 'lodash'

/**
 * Parse profile metadata from JSON string into Object.
 * @param profileData
 * @returns {*}
 */
export const parseProfile = (profileData) => {
  // get metadata if string, by parsing JSON.
  const metadata = profileData ? JSON.parse(profileData) : profileData

  // return the profile key under meta, or just meta if not found.
  return get(metadata, 'profile', metadata)
}
