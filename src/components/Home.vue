<template>
<div class="outside">
  <h1>点名器</h1>
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
    <tr>
      <td><h3>学号</h3></td>
      <td><input disabled></td>
    </tr>
    </tbody>
  </table>
  <div class="selectPattern">
    <div>
      <span>抽取方式</span>
    </div>
    <div>
      <input type="radio" id="random" name="pattern" style="margin-left: 0" checked>
      <label for="random">随机抽取（伪随机数）</label>
      <input type="radio" id="order" name="pattern">
      <label for="order">顺序抽取</label>
    </div>
  </div>
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
.selectPattern{
  position: absolute;
  left: 0;
  bottom: 10px;
}
.selectPattern > div > input {
  margin: 0 5px;
}
</style>