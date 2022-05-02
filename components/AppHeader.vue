<template>
  <header class="header">
    <div class="l-header">
      <div class="icon-container">
        <IconLogo class="icon" />
      </div>
      <AppNavbar class="navbar" />
    </div>
  </header>
</template>
<style lang="scss" scoped>
@use 'core/colors' as color;
@import 'core/query';

.header {
  background-color: color.$white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  height: 56px;
  padding: 0px 19px;
  position: sticky;
  top: 0;
  z-index: 9;
  @include from(1024px) {
    height: 90px;
  }
}
.l-header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  max-width: 1253px;
  margin: 0 auto;
}

.icon {
  display: block;
  height: 32px;
  @include from(1024px) {
    height: 52px;
    display: inline-block;
  }
}
</style>
