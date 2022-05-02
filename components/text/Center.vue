<template>
  <component :is="as" class="center">
    <slot />
  </component>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    as: {
      default: 'span',
      type: [String, Object],
    },
  },
})
</script>
<style scoped>
.center {
  display: block;
  width: 100%;
  margin: 0 auto;
}
</style>
