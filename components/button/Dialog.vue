<template>
  <el-form ref="form" class="dialog" :model="form" :rules="rules">
    <el-form-item prop="name">
      <el-input v-model="form.name" placeholder="Usuario">
        <template #prefix>
          <img src="~/assets/images/user 1.png" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="form.password"
        placeholder="Contraseña"
        type="password"
      >
        <template #prefix>
          <img src="~/assets/images/Group 2319.png" />
        </template>
      </el-input>
    </el-form-item>
    <a>Olvidé contraseña</a>
    <button @click.prevent="submit">Acceder</button>
  </el-form>
</template>
<script lang="ts">
import Vue from 'vue'
import { Form } from 'element-ui'
import { Validators } from '@/util/form/rules'

export default Vue.extend({
  data: () => ({
    form: {
      name: '',
      password: '',
    },
    rules: {
      name: [
        Validators.required('Campo requerido', { trigger: 'blur' }),
        Validators.regex('Usuario invalido', {
          pattern: /^[a-zA-Z]+$/,
          trigger: 'blur',
        }),
      ],
      password: [
        Validators.required('Campo requerido', { trigger: 'blur' }),
        Validators.min('Debe de tener al menos 8 caracteres', {
          min: 8,
          trigger: 'blur',
        }),
      ],
    },
  }),
  methods: {
    submit() {
      const form = this.$refs.form as Form

      form.validate((isValid) => {
        if (isValid) {
          console.log('Formulario valido')
        }
      })
    },
  },
})
</script>
<style scoped>
a,
button {
  margin-top: 20px;
}
a {
  display: inline-block;
  font-size: 12px;
}
button {
  float: right;
  border: none;
  font-size: 18px;
  font-weight: 700;
  background-color: transparent;
  color: #f59121;
}

.dialog {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  width: 376px;
  position: relative;
  text-align: left;
}

.dialog::after {
  position: absolute;
  content: '';
  width: 15px;
  height: 15px;
  transform: rotate(45deg) translateY(-7px);
  top: 0;
  right: 25px;
  background-color: white;
}
input {
  width: 70%;
  border: none;
  margin-left: 10px;
}
input,
img {
  display: inline-block;
  vertical-align: middle;
}
</style>
