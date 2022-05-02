<template>
  <div class="banner">
    <slot name="source" />
    <div class="l-banner-image">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use 'utilities/mixins';
@import 'components/banner';
.l-banner-image {
  @include mixins.as-container;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
