<template>
  <div class="constrains">
    <p class="center main">
      <strong
        >Una opción <span class="text-blue">confiable</span>,
        <span class="text-teal">segura</span> y
        <span class="text-orange">digital</span>
      </strong>
    </p>
    <p class="center second">Solo sigue estos sencillos pasos</p>
  </div>
</template>
<style lang="scss" scoped>
@import 'core/query';

.constrains {
  margin-top: 38px;
  margin-bottom: 38px;
  @include from(920px) {
    margin-top: 88px;
    margin-bottom: 88px;
  }
}
.center {
  text-align: center;
}

.main {
  font-size: 36px;
  @include from(920px) {
    font-size: 39px;
  }
}

.second {
  font-size: 23px;
  @include from(920px) {
    font-size: 33px;
  }
}
</style>
