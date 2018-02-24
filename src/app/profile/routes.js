/**
 * Movements module routes.
 */

// import components
import Profile from './profile/profile.vue'

const routes = [
  { name: 'profile', component: Profile, path: '/@:username' }
]

export default [
  ...routes
]
