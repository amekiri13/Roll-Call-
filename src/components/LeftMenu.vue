<template>
<ul class="menu">
  <li><router-link to="/"><img src="../assets/icons/2931150_home_furniture_office_architecture_house_homepage_building.png"></router-link></li>
  <li><router-link to="/edit"><img src="../assets/icons/2931178_creative_edit_pencil_change_draw_design_pen.png"></router-link></li>
  <li><router-link to="/setting"><img src="../assets/icons/2931152_control_tools_repair_settings_gear_adjust_setup.png"></router-link></li>
  <li style="position: absolute;bottom: 0"><router-link to="/about"><img src="../assets/icons/2931180_info_service_about_support_chat_information.png"></router-link></li>
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
  /*background-color: #42b983;*/
  height: 100vh;
  list-style: none;
}
.menu>li {
  margin: 10px;
  height: 60px;
  width: 60px;
  border-radius: 60px;
  /*background-color: aqua;*/
  display: flex;
  justify-content: center;
}
.menu>li:hover {
  background-color: rgba(0.3,0.3,0.3,0.1);
}
.menu>li>a{
  color: black;
}
.menu img {
  height: 45px;
  width: 45px;
  margin: 7px 0;
}
</style>