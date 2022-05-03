<template>
  <BannerImage class="buble-image">
    <template #source>
      <img
        src="~/assets/images/bubble-background.png"
        alt="burbujas"
        class="image"
      />
    </template>
    <div class="buble-image__content">
      <HeadingTitle decoration="center">Que Hacemos</HeadingTitle>
      <p>
        Somos la mejor opción con créditos a tu medida sin papeleo<br />
        <strong class="text-bold"
          >Unimos empresas y pequeños negocios con bancos, cajas y
          cooperativas</strong
        ><br />
        para facilitar la colocación de créditos en un proceso digital<br />
        sin papeles, ni tramites inecesarios
      </p>
    </div>
  </BannerImage>
</template>
<style lang="scss" scoped>
@import 'core/query';
@import 'utilities/debug';
.buble-image {
  text-align: center;
  height: 364px;
  @include from(890px) {
    height: 444px;
  }
}

.buble-image__content {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  padding: 0px 19px;
  transform: translate(-50%, -50%);
  p {
    margin-top: 15px;
    @include from(890px) {
      font-size: 24px;
    }
  }
}

.image {
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
}
</style>
