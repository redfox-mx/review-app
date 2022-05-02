<template>
  <ul class="navigation-list">
    <LinkNavigationAction>Ingresar</LinkNavigationAction>
    <LinkNavigationItem>Quienes somos</LinkNavigationItem>
    <LinkNavigationItem>¿Como lo hacemos?</LinkNavigationItem>
    <LinkNavigationItem>Requisitos</LinkNavigationItem>
    <LinkNavigationItem>Beneficios</LinkNavigationItem>
    <LinkNavigationItem>Contáctanos</LinkNavigationItem>
  </ul>
</template>
<style lang="scss" scoped>
@import 'core/query';

.navigation-list {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  list-style: none;
  @include from(1024px) {
    flex-direction: row;
    align-items: center;
    gap: 34px;
  }
}
</style>
