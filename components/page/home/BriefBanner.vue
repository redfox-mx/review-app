<template>
  <BannerImage class="first-image">
    <template #source>
      <picture>
        <source
          media="(min-width: 890px)"
          srcset="~/assets/images/market-desktop.png"
        />
        <img src="~/assets/images/market-mobile.png" class="image" />
      </picture>
    </template>
    <div id="brief-section">
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
      <br />
      <div class="center">
        <ButtonAccent> Solicitar crédito </ButtonAccent>
      </div>
    </div>
  </BannerImage>
</template>
<style lang="scss" scoped>
@import 'core/query';
.first-image {
  height: 836px;
  @include from(890px) {
    height: 561px;
  }
}

#brief-section {
  width: 251px;
  margin: 0 auto;
  padding-top: 17px;
  @include from(890px) {
    width: 360px;
    float: right;
    margin-top: 60px;
  }
}

.image {
  display: block;
  object-fit: cover;
  object-position: left top;
  width: 100%;
  height: 100%;
}
</style>
