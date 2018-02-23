<script>
// dependencies.
// (resources mixin.)
import resources from './resources'

/**
 * Header / Navbar component export.
 */
export default {
  /**
   * Component name.
   */
  name: 'ch-header',

  /**
   * Component mixins.
   */
  mixins: [ resources ]
}
</script>

<template lang="pug" src="./header.pug"></template>
<style lang="scss" src="./header.scss"></style>
