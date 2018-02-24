import { mapActions } from 'vuex'

export default {
  ...mapActions('app/profile', [
    'loadUserByUsername'
  ])
}
