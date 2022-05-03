<template>
  <section class="banner-container">
    <div class="constrains">
      <div>
        <div class="card">
          <div class="center-block">
            <p class="card__number card__number--blue">1</p>
          </div>
          <p class="card__description">
            Ingrese <strong class="text-bold">la información</strong><br />
            de su negocio
          </p>
        </div>
        <div class="card">
          <div class="center-block">
            <p class="card__number card__number--orange">2</p>
          </div>
          <p class="card__description">
            Valida tu correo y
            <strong class="text-bold"
              >envia tu<br />
              documentación</strong
            >
          </p>
        </div>
      </div>
      <div class="to-right">
        <div class="card">
          <div class="center-block">
            <p class="card__number card__number--teal">3</p>
          </div>
          <p class="card__description">
            Elige <strong class="text-bold">la oferta</strong> que<br />
            mas te convenga
          </p>
        </div>
        <div class="card">
          <div class="center-block">
            <p class="card__number card__number--blue">4</p>
          </div>
          <p class="card__description">
            <strong class="text-bold">Obten tu credito,</strong><br />
            una entidad financiera<br />
            te contactara
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import 'core/query';
@import 'utilities/debug';

$device: 700px;

.banner-container {
  margin-bottom: 70px;
}

@include from($device) {
  .banner-container {
    position: relative;
    margin-bottom: 90px;
  }

  .banner-container::before {
    content: '';
    position: absolute;
    top: 33%;
    right: 0;
    width: 35%;
    border-bottom: 60px solid #54c1aa;
  }

  .banner-container::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 15%;
    width: 35%;
    border-bottom: 60px solid #f59121;
  }

  .to-right {
    text-align: right;
  }
}

.center-block {
  margin: 0 auto;
  width: fit-content;
}
.card__number--blue {
  color: #1a3f70;
  border-color: #1a3f70;
}
.card__number--orange {
  color: #f59121;
  border-color: #f59121;
}
.card__number--teal {
  color: #54c1aa;
  border-color: #54c1aa;
}

.card {
  text-align: center;
  margin-top: 45px;
  @include from($device) {
    display: inline-block;
    vertical-align: top;
    width: 28%;
  }
}
.card__number {
  font-size: 64px;

  font-weight: 700;
  display: table-cell;
  width: 122px;
  height: 122px;
  border-width: 14px;
  border-style: solid;
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
  @include from($device) {
    height: 134px;
    width: 134px;
  }
}

.card__description {
  font-size: 18px;
  margin-top: 15px;
  @include from($device) {
    font-size: 21px;
  }
}
</style>
