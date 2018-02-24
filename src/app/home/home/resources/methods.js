// imports.

/**
 * Home component methods.
 */
export default {
  redirect () {
    const username = this.query

    this.$router.push({ name: 'profile', params: { username } })
  }
}
