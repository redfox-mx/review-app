<template>
  <BannerImage class="banner">
    <template #source>
      <picture>
        <source
          media="(min-width: 890px)"
          srcset="~/assets/images/requisitos-desktop.png"
        />
        <img src="~/assets/images/requisitos-mobile.png" />
      </picture>
    </template>
    <div class="section">
      <div class="section__heading">
        <HeadingTitle decoration="center">Requisitos</HeadingTitle>
      </div>
      <ul class="section__list">
        <li class="section__item">
          <div class="section__tick-conteiner">
            <IconTick color="#F59121" class="section__tick" />
          </div>
          <p>Estar <strong>bien calificado</strong> en el sistema financiero</p>
        </li>
        <li class="section__item">
          <div class="section__tick-conteiner">
            <IconTick color="#54C1AA" class="section__tick" />
          </div>
          <p>Tener una <strong>antiguedad minima de 6 mese</strong></p>
        </li>
        <li class="section__item">
          <div class="section__tick-conteiner">
            <IconTick color="#1A3F70" class="section__tick" />
          </div>
          <p><strong>Comprobantes</strong> que acrediten tu negocio</p>
        </li>

        <li class="section__item">
          <div class="section__tick-conteiner">
            <IconTick color="#F59121" class="section__tick" />
          </div>
          <p><strong>Garantia</strong></p>
        </li>
      </ul>
    </div>
  </BannerImage>
</template>
<style lang="scss" scoped>
@import 'core/query';

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.banner {
  height: 615px;
}

.section {
  margin-top: 41px;
  @include from(890px) {
    width: 580px;
    float: right;
  }
}

.section__heading {
  width: fit-content;
  margin: 0 auto;
}

.section__list {
  list-style: none;
  margin-top: 43px;
  & > * {
    margin-bottom: 20px;
    @include from(890px) {
      // margin-bottom: 40px;
    }
  }
}

.section__tick-conteiner {
  width: 24px;
  height: 100%;
  display: inline-block;
}

.section__tick {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.section__item {
  position: relative;
  font-size: 0;
  p {
    font-size: 18px;
    display: inline-block;
    padding-left: 15px;
    width: calc(100% - 50px);
    @include from(890px) {
      font-size: 24px;
    }
  }
}
</style>
