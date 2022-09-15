<template>
<div class="outside">
  <table>
    <tbody>
      <tr>
        <td><h3>姓名</h3></td>
      </tr>
      <tr>
        <td><h3>班级</h3></td>
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
  width: calc(100vw - 80px);
  height: 100vh;
  background-color: aqua;
}
.outside > table {

}
</style>