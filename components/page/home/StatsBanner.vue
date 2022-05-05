<template>
  <section class="constrains stats">
    <div class="stats__card">
      <div class="stats__image">
        <img src="~/assets/images/person-blue.svg" class="image" />
      </div>
      <h2 class="text-xl text-bolder text-blue">300</h2>
      <p class="text-normal">Millones<br />colocados</p>
    </div>

    <div class="stats__card">
      <div>
        <img src="~/assets/images/suitcase-teal.svg" class="image" />
      </div>
      <h2 class="text-xl text-teal">300</h2>
      <p class="text-normal">Millones<br />colocados</p>
    </div>
    <div class="stats__card last">
      <div>
        <img src="~/assets/images/bank-orange.svg" class="image" />
      </div>
      <h2 class="text-xl text-orange">300</h2>
      <p class="text-normal">Millones<br />colocados</p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import 'core/query';
.stats__card {
  text-align: center;
  display: inline-block;
  width: 100%;
  @include from(440px) {
    width: calc(100% / 2);
  }
  @include from(600px) {
    width: calc(100% / 3);
  }
}

.stats {
  padding: 44px 0px;
  font-size: 0;
  padding-bottom: 64px;
  @include until(600px) {
    .last {
      display: block;
      margin: 0 auto;
    }
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
