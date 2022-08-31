<template>
<left-menu></left-menu>
<router-view></router-view>
</template>

<script>
import LeftMenu from "./components/LeftMenu";
import {createRouter,createWebHashHistory} from "vue-router";

const routes = [
  {path: '/', components: ''}
];

createRouter({
  history: createWebHashHistory(),
  routes
});

export default {
  name: 'App',
  components:{
    LeftMenu
  },
  methods:{

  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
*{
  margin: 0;
  padding: 0;
}
router-view {
  position: absolute;
  right: 0;
  height: 100vh;
  width: calc(100vw - 80px);
}
</style>
