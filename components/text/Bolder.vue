<template>
  <strong>
    <slot />
  </strong>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use 'core/typography' as font;

strong {
  font-weight: map.get(font.$weight, 'bolder');
}
</style>
