<template>
  <p :style="{ color: color }">
    <slot />
  </p>
</template>
<script>
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
