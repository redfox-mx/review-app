<template>
  <div class="navbar">
    <nav class="navbar__links" :class="{ 'navbar__links--close': openMenu }">
      <LinkNavigation />
    </nav>
    <button class="navbar__toggle-button" @click="toggleMenu()">
      <IconBurgerMenu v-if="openMenu" />
      <div v-else>Cerrar <IconTimes /></div>
    </button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    openMenu: true,
  }),
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu
    },
  },
})
</script>
<style lang="scss" scoped>
@import 'core/query';

.navbar__links {
  position: fixed;
  left: 0;
  right: 0;
  top: 56px;
  bottom: 0;
  overflow-x: hidden;
  background-color: white;
  transition-property: width;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
  @include from(1024px) {
    position: static;
  }
}

.navbar__links--close {
  @include until(1024px) {
    width: 0px;
  }
}

.navbar__toggle-button {
  border: none;
  outline: none;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  background-color: transparent;
  color: #f59021;
  @include from(1024px) {
    display: none;
  }
}
</style>
