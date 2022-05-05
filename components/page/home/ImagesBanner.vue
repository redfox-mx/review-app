<template>
  <div>
    <div class="center banner__title">
      <HeadingTitle decoration="center">Beneficios</HeadingTitle>
    </div>
    <div class="banner_image">
      <picture>
        <source
          media="(min-width: 890px)"
          srcset="~/assets/images/sl-desktop.png"
        />
        <img src="~/assets/images/sl-mobile.png" />
      </picture>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import 'core/query';
.center {
  width: fit-content;
  margin: 0 auto;
}
.banner_image {
  height: 531px;
  @include from(890px) {
    height: 432px;
  }
}

.banner__title {
  padding: 40px 0px;
}
img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: bottom right;
}
</style>
