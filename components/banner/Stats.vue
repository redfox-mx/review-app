<template>
  <div class="banner">
    <div class="constrains banner-stats">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import 'components/banner';

.banner-stats {
  justify-content: space-around;
}
</style>
