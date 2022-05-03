<template>
  <div>
    <div>
      <slot name="source" />
    </div>
    <h3 class="stats__title">
      {{ title }}
    </h3>
    <div>
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      required: true,
      type: String,
    },
  },
})
</script>
<style lang="scss" scoped>
.stats__title {
  font-weight: 700;
  font-style: 36px;
  text-align: center;
}
</style>
