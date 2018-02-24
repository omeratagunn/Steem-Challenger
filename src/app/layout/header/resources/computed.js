import { mapGetters } from 'vuex'

export default {
  ...mapGetters([
    'steemTicker',
    'sbdTicker',
    'btcTicker',
    'ethTicker'
  ])
}
