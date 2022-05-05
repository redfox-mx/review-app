<template>
  <div class="sidenav" :class="{ visible }">
    <nav class="navigation">
      <ul class="list">
        <li>
          <NuxtLink to="/">Quienes somos</NuxtLink>
        </li>
        <li><NuxtLink to="/">¿Colo lo hacemos?</NuxtLink></li>
        <li><NuxtLink to="/">Requisitos</NuxtLink></li>
        <li><NuxtLink to="/">Contáctanos</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    visible() {
      return this.$store.state.layout.openSidenav
    },
  },
})
</script>
<style lang="scss" scoped>
@use 'core/query' as *;

a {
  text-decoration: none;
  color: #1a3f70;
  font-size: 18px;
  font-weight: 700;
}

a:link {
  color: #1a3f70;
}
li {
  display: block;
  padding: 20px 31px;
  border-bottom: 1px solid #f59021;
}
.sidenav {
  background-color: #f8f8f8;
  position: fixed;
  top: 59px;
  bottom: 0;
  background-color: white;
  width: 100%;
  z-index: 1;
  transform: translateX(-100%);
  transition-property: transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}

.visible {
  transform: translateX(0%);
}

@include from(1024px) {
  .sidenav {
    display: none;
  }
}
</style>
