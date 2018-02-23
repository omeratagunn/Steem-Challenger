import { mapGetters } from 'vuex'

export default {
  ...mapGetters('app/profile', [
    'loading',
    'username',
    'account',
    'profile',
    'name',
    'website',
    'location',
    'profileImage'
  ])
}
