<template>
<ul class="menu">
  <li><router-link to="/"><font-awesome-icon icon="fa-solid fa-user-secret" class="icon" /></router-link></li>
  <li><router-link to="/edit">Edit</router-link></li>
  <li><router-link to="/setting">Setting</router-link></li>
  <li style="position: absolute;bottom: 0"><router-link to="/about">About</router-link></li>
</ul>
</template>

<script>
export default {
  name: "LeftMenu"
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  background-color: #42b983;
  height: 100vh;
  list-style: none;
}
.menu>li {
  margin: 10px;
  height: 60px;
  width: 60px;
  border-radius: 60px;
  background-color: aqua;
  display: flex;
  justify-content: center;
}
.menu>li>a{
  color: black;
}
.icon {
  font-size: 40px;
  margin: 8px 0;
  position: relative;
}
</style>