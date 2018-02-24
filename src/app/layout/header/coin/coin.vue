<script>
// dependencies.
// (resources mixin.)
import resources from './resources'

/**
 * Header / Coins component export.
 */
export default {
  /**
   * Component name.
   */
  name: 'ch-header-coin',

  /**
   * Component mixins.
   */
  mixins: [ resources ]
}
</script>

<template lang="pug" src="./coin.pug"></template>
<style lang="scss" src="./coin.scss"></style>
