<template>
  <svg
    width="24"
    height="17"
    viewBox="0 0 24 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.75 7.62338L4.5 2.68831L0 7.62338L9.75 17L24 2.68831C21.2286 0.0896924 16.8829 0.202578 14.2502 2.94158L9.75 7.62338Z"
      :fill="color"
    />
  </svg>
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
