<template>
<ul class="menu">
  <li></li>
  <li></li>
  <li></li>
  <li style="position: absolute;bottom: 0"></li>
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
}
</style>