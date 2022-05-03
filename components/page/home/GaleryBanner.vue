<template>
  <BannerColor color="#1A3F70">
    <div class="galery">
      <div class="galery__image">
        <img src="~/assets/images/coperativa-scb.png" />
      </div>
      <div class="galery__image">
        <img src="~/assets/images/caja-ica.png" />
      </div>
      <div class="galery__image">
        <img src="~/assets/images/banco-pichincha.png" />
      </div>
      <div class="galery__image">
        <img src="~/assets/images/caja-andes.png" />
      </div>
    </div>
  </BannerColor>
</template>
<style lang="scss" scoped>
@import 'core/query';

@include from(400px) {
  .galery__image:nth-child(-n + 2) {
    display: table-cell;
  }
}

@include from(600px) {
  .galery__image:nth-child(-n + 3) {
    display: table-cell;
  }
}

@include from(800px) {
  .galery__image:nth-child(-n + 4) {
    display: table-cell;
  }
}

.galery__image:nth-child(-n + 1) {
  display: table-cell;
}

.galery {
  width: 100%;
  height: 209px;
  display: table;
}

.galery__image {
  display: none;
  vertical-align: middle;
  width: calc(100% / 4);
  min-width: 200px;
}

img {
  display: block;
  margin: 0 auto;
}
</style>
