<template>
  <component :is="headingLevel" :class="[decoration, 'title']">
    <slot />
  </component>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    decoration: {
      default: 'start',
      type: String,
    },
    level: {
      default: 1,
      type: [String, Number],
    },
  },
  computed: {
    headingLevel() {
      const level = this.level
      return `h${level}`
    },
  },
})
</script>
<style lang="scss" scoped>
@use 'sass:map';
@use 'core/typography' as font;

@mixin create-decoration {
  content: '';
  position: relative;
  display: block;
  height: 0;
  top: 5px;
  width: 75px;
  border-bottom: solid 7px var(--accent-color);
}

.title {
  display: inline-block;
  margin-bottom: 10px;
  color: var(--primary-color);
  font-weight: map.get(font.$weight, 'bolder');
  font-size: 30px;
  position: relative;
}

.start::after {
  @include create-decoration;
}

.center::after {
  @include create-decoration;
  left: 50%;
  transform: translateX(-50%);
}

.end::after {
  @include create-decoration;
  left: 100%;
  transform: translateX(-100%);
}
</style>
