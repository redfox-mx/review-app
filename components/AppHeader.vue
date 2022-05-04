<template>
  <header class="header constrains">
    <IconLogo class="logo" />

    <div class="navigation-container">
      <nav class="navigation">
        <ul class="list">
          <li>Quienes somos</li>
          <li>¿Colo lo hacemos?</li>
          <li>Requisitos</li>
          <li>Contáctanos</li>
        </ul>
      </nav>
      <div class="dialog-anchor">
        <button class="button" @click="toggleDialog()">Ingresar</button>
        <div class="dialog-visibility">
          <ButtonDialog />
        </div>
      </div>
    </div>
    <div class="menu">
      <IconBurgerMenu />
    </div>
  </header>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    openDialog: false,
  }),
  methods: {
    toggleDialog() {
      this.openDialog = !this.openDialog
    },
  },
})
</script>
<style lang="scss" scoped>
@import 'core/query';

@include until(1023px) {
  header .navigation-container {
    display: none;
  }

  .dialog-visibility {
    display: none;
  }
}

.dialog-anchor {
  position: relative;
}

.dialog-visibility {
  position: absolute;
  z-index: 10;
  bottom: -40px;
  right: 0;

  transform: translateY(100%);
}

.header {
  background-color: white;
  height: 64px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  font-size: 0;
  padding-top: 15px;
  position: relative;
  @include from(1024px) {
    height: 90px;
  }
}

.navigation-container {
  display: inline-block;
  text-align: right;
  width: calc(100% - 109px);
  * {
    display: inline-block;
  }
}

.navigation {
  font-size: 18px;
  font-weight: 600;
  vertical-align: middle;
}

.logo {
  display: inline-block;
  height: 32px;
  @include from(1024px) {
    height: 52px;
  }
}

.list {
  list-style: none;
  vertical-align: middle;
  > * ~ * {
    margin-left: 35px;
  }
}

.button {
  font-size: 24px;
  border: none;
  background-color: #1a3f70;
  border-radius: 6px;
  margin-left: 35px;
  padding: 12px 20px;
  color: white;
  vertical-align: middle;
}

.menu {
  position: absolute;
  right: 19px;
  top: 50%;
  transform: translateY(-50%);
  @include from(1024px) {
    display: none;
  }
}
</style>
