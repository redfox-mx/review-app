<template>
  <div class="banner" :style="{ backgroundColor: color }">
    <div class="constrains">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    color: {
      required: true,
      type: String,
    },
  },
})
</script>
<style lang="scss" scoped>
@import 'components/banner';
</style>
