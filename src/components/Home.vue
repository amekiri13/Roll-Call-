<template>
<div class="outside">
  <h1>首页</h1>
  <table>
    <tbody>
      <tr>
        <td><h3>姓名</h3></td>
        <td><input disabled></td>
      </tr>
      <tr>
        <td><h3>班级</h3></td>
        <td><input disabled></td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home"
}
</script>

<style scoped>
.outside {
  position: absolute;
  left: 80px;
  width: calc(100vw - 100px);
  height: calc(100vh - 20px);
  margin: 20px;
  /*background-color: aqua;*/
}
.outside > table {
  padding: 10px;
}
.outside > table > tbody > tr > td {
  margin: 5px 0;
}
.outside > table > tbody > tr > td > input {
  display: block;
  height: 25px;
  margin: 0 10px;
  right: 0;
}
</style>