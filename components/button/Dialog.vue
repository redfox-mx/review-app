<template>
  <form class="dialog">
    <div class="control">
      <img src="~/assets/images/user 1.png" />
      <input placeholder="Correo electronico" />
    </div>
    <hr />
    <div class="control">
      <img src="~/assets/images/Group 2319.png" />
      <input placeholder="Contraseña" />
    </div>
    <hr />
    <a>Olvidé contraseña</a>
    <button>Acceder</button>
  </form>
</template>
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
.control {
  margin: 20px 10px;
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
}
</style>
