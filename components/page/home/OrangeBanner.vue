<template>
  <BannerColor id="accent-banner" color="var(--accent-color)">
    <TextColor color="white" class="text">
      <TextBolder>Somos la mejor opción para tu negocio</TextBolder><br />
      con créditos a tu medida <TextBolder>sin papeleo</TextBolder>
    </TextColor>
  </BannerColor>
</template>
<style lang="scss" scoped>
@import 'core/query';
#accent-banner {
  padding: 65px 0;
  @include from(1024px) {
    padding: 30px 0;
  }
  .text {
    text-align: center;
    font-size: 24px;
    @include from(1024px) {
      font-size: 36px;
    }
  }
}
</style>
