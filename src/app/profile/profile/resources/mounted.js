import { get } from 'lodash'

export default function () {
  // load username from route.
  const username = get(this.$route.params, 'username')

  // call the user loading action.
  this.loadUserByUsername(username).catch(() => {
    this.error = true
  })
}
