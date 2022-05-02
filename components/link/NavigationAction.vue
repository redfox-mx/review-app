<template>
  <div class="action">
    <button class="navigation-action">
      <slot />
    </button>
  </div>
</template>
<style lang="scss" scoped>
@import 'core/query';
@import 'components/button';
@import 'components/link';

.action {
  @include from(1024px) {
    order: 99;
  }
}

.navigation-action {
  @extend .link-navbar;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  text-align: left;
  @include from(1024px) {
    @include as-button;
    @include as-accent;
  }
}
</style>
