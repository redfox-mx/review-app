<template>
  <div class="banner">
    <div class="center banner__title">
      <HeadingTitle decoration="center">Contactanos</HeadingTitle>
    </div>
    <div class="constrains">
      <div class="container">
        <el-form ref="form" class="form" :model="form" :rules="rules">
          <el-form-item prop="name">
            <el-input
              v-model="form.name"
              placeholder="Nombre"
              class="input-with-shadow"
            >
              <template #prefix>
                <InputIcon>
                  <IconPersonMini />
                </InputIcon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input
              v-model="form.email"
              placeholder="Correo electronico"
              class="input-with-shadow"
            >
              <template #prefix>
                <InputIcon>
                  <IconEmailMini />
                </InputIcon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="description">
            <div>
              <el-input
                v-model="form.description"
                type="textarea"
                placeholder="Descripcion"
                class="textarea-with-shadow"
                rows="5"
                maxlength="200"
                show-word-limit
              >
              </el-input>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="info" class="expand">CAPTCHA</el-button>
          </el-form-item>
          <el-button type="primary" @click.prevent="validate">Enviar</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Form } from 'element-ui'
import { Validators } from '@/util/form/rules'

export default Vue.extend({
  data: () => ({
    form: {
      name: '',
      email: '',
      description: '',
    },
    rules: {
      name: [
        Validators.required('Es necesario un nombre', {
          trigger: 'blur',
        }),
        Validators.regex("Solo debe tener letras de la 'a' a la 'z'", {
          pattern: /^[a-zA-Z\s]+$/,
          trigger: ['change', 'blur'],
        }),
      ],
      email: [
        Validators.required('Campo requerido', { trigger: 'blur' }),
        Validators.email('Correo invalido', { trigger: 'blur' }),
      ],
      description: [
        Validators.required('Campo requerido', { trigger: 'blur' }),
        Validators.min('Numero necesita al menos 20 caracteres', {
          min: 20,
          trigger: 'blur',
        }),
      ],
    },
  }),
  methods: {
    validate() {
      const form = this.$refs.form as Form

      form.validate((isValid) => {
        if (isValid) {
          console.log('Formulario Valido!')
        }
      })
    },
  },
})
</script>
<style lang="scss" scoped>
@import 'core/query';

$device: 768px;

.expand {
  width: 100%;
}

.container {
  max-width: 447px;
  margin: 0 auto;
}

.form {
  text-align: center;
}

.center {
  display: block;
  width: max-content;
  margin: 0 auto;
}

.banner__title {
  margin-top: 20px;
  margin-bottom: 20px;
}

svg {
  width: 14px;
  height: 14px;
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
