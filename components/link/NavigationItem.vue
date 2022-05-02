<template>
  <li>
    <NuxtLink to="/" class="link link-navbar">
      <slot />
    </NuxtLink>
  </li>
</template>
<style lang="scss" scoped>
@import 'components/link';

.link-navbar {
  width: 100%;
}
</style>
