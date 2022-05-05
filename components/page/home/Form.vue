<template>
  <div class="banner">
    <div class="center banner__title">
      <HeadingTitle decoration="center">Contactanos</HeadingTitle>
    </div>
    <form class="form">
      <el-input v-model="inputName" placeholder="Nombre">
        <template #prefix>
          <span class="input__icon">
            <IconPersonMini />
          </span>
        </template>
      </el-input>
      <el-input v-model="inputEmail" placeholder="Correo electrónico">
        <template #prefix>
          <span class="input__icon">
            <IconPencilMini />
          </span>
        </template>
      </el-input>
      <div class="textarea-achor">
        <el-input
          v-model="inputDescription"
          placeholder="Descripción"
          type="textarea"
          rows="4"
        >
        </el-input>
        <span class="textarea__icon input__icon">
          <IconPencilMini />
        </span>
      </div>
      <el-button type="info" class="expanded">CAPTCHA</el-button>
      <div class="center">
        <el-button type="primary">Enviar</el-button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    inputName: '',
    inputEmail: '',
    inputDescription: '',
  }),
})
</script>
<style lang="scss" scoped>
@import 'core/query';

$device: 768px;

.expanded {
  display: block;
  width: 100%;
}

.textarea-achor {
  position: relative;
}

.textarea__icon {
  position: absolute;
  top: -4px;
  left: 5px;
}

.center {
  display: block;
  width: fit-content;
  margin: 0 auto;
}

.form {
  margin: auto;
  max-width: 350px;
}

form.form > * {
  margin-bottom: 15px;
}

.banner__title {
  margin-top: 20px;
  margin-bottom: 20px;
}

svg {
  width: 14px;
  height: 14px;
}

.input__icon {
  display: inline-block;
  margin-top: 12px;
  padding-right: 5px;
  border-right: 1px solid darken(#c0c4cc, 30%);
}

.banner {
  padding-bottom: 70px;
}

@include from($device) {
  .banner {
    position: relative;
    padding-top: 20px;
  }

  .banner::before {
    content: '';
    position: absolute;
    top: 33%;
    right: 0;
    width: 30%;
    border-bottom: 60px solid #54c1aa;
  }

  .banner::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 15%;
    width: 30%;
    border-bottom: 60px solid #f59121;
    z-index: -1;
  }
}
</style>
