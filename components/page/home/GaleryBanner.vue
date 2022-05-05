<template>
  <BannerColor color="#1A3F70">
    <div class="gallery">
      <client-only>
        <carousel
          :per-page-custom="[
            [320, 1],
            [500, 2],
            [700, 3],
            [900, 4],
          ]"
          :loop="true"
          :pagination-enabled="false"
          :autoplay="true"
        >
          <slide v-for="image in images" :key="image">
            <img :src="image" />
          </slide>
        </carousel>
      </client-only>
    </div>
  </BannerColor>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    images: [
      '/coperativa-scb.png',
      '/caja-ica.png',
      '/banco-pichincha.png',
      '/caja-andes.png',
    ],
  }),
})
</script>
<style lang="scss" scoped>
.gallery {
  padding: 60px 0;
}
img {
  display: block;
  margin: 0 auto;
}
</style>
