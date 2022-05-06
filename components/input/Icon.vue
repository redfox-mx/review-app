<template>
  <span class="input__icon">
    <slot />
  </span>
</template>
<style lang="scss">
.input__icon {
  position: relative;
  top: 2px;
  padding-right: 5px;
  border-right: 1px solid darken(#c0c4cc, 20%);
}
</style>
