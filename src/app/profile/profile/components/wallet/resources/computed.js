import { mapGetters } from 'vuex'

export default {
  ...mapGetters('app/profile', [
    'loading',
    'username',
    'wallet'
  ]),

  ...mapGetters([
    'steemRateUSD',
    'sbdRateUSD'
  ]),

  usdWallet () {
    const balance = {
      steem: this.wallet.balance.steem * this.steemRateUSD,
      sbd: this.wallet.balance.sbd * this.steemRateUSD
    }

    const savings = {
      steem: this.wallet.savings.steem * this.steemRateUSD,
      sbd: this.wallet.savings.sbd * this.steemRateUSD
    }

    const totals = {
      steem: balance.steem + savings.steem,
      sbd: balance.sbd + savings.sbd,
      balance: balance.steem + balance.sbd,
      savings: savings.steem + savings.sbd
    }

    const sum = totals.balance + totals.savings

    return { balance, savings, totals, sum }
  }
}
