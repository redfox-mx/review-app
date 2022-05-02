<template>
  <main>
    <BannerImage>
      <template #source>
        <picture>
          <source
            media="(min-width: 1024px)"
            srcset="~/assets/images/market-desktop.png"
          />
          <img src="~/assets/images/market-mobile.png" />
        </picture>
      </template>
      <div id="brief-section">
        <span class="expand"></span>
        <CardBrief>
          <HeadingTitle>Reactiva Peru</HeadingTitle>
          <TextColor color="#54C1AA"
            >Créditos hasta
            <TextBolder
              ><em>36 meses,</em><br />
              interes del 2%, hasta s/ 250 mil</TextBolder
            ><br />medianas y grandes empresas</TextColor
          >
        </CardBrief>
        <CardBrief>
          <HeadingTitle>FAE-MYPE</HeadingTitle>
          <TextColor color="#54C1AA"
            >Créditos hasta
            <TextBolder
              ><em>48 meses,</em><br />
              interes del 7%</TextBolder
            ><br />micro empresas y pequelos negocios</TextColor
          >
        </CardBrief>
        <ButtonAccent> Solicitar crédito </ButtonAccent>
      </div>
    </BannerImage>
    <BannerColor id="accent-banner" color="var(--accent-color)">
      <TextColor color="white" class="text">
        <TextBolder>Somos la mejor opción para tu negocio</TextBolder><br />
        con créditos a tu medida <TextBolder>sin papeleo</TextBolder>
      </TextColor>
    </BannerColor>
    <div class="constrains">
      <HeadingTitle decoration="center" level="2">Que Hacemos</HeadingTitle>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
<style lang="scss" scoped>
@import 'utilities/debug';
@import 'core/query';

#brief-section {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 17px 50px 0px 20px;
  @include from(1024px) {
    left: auto;
    top: 50%;
    transform: translateY(-50%);
  }
  button {
    font-size: 24px;
    font-weight: 600;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 15px;
    @include from(1024px) {
      position: static;
      transform: translateX(0%);
    }
  }
}

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
