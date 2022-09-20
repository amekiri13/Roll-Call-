<template>
<div class="outside">
  <table>
    <tbody>
      <tr>
        <td><h3>姓名</h3></td>
        <td><input disabled></td>
      </tr>
      <tr>
        <td><h3>性别</h3></td>
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
      <tr>
        <td><h3>头像</h3></td>
        <td><div class="avatar"></div></td>
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
  <div>
    <button id="button_start">开始</button>
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
  /*padding: 10px;*/
  width: calc(100% - 100px);
}
.outside > table > tbody > tr > td {
  margin: 5px 0;
}
.outside > table > tbody > tr > td > input {
  display: block;
  height: 30px;
  margin: 5px 10px;
  right: 0;
  width: 100%;
}
.avatar {
  width: 300px;
  height: 300px;
  background-color: #cccccc;
  border-radius: 300px;
  border: none;
  margin: 10px 10px;
}
.selectPattern{
  position: absolute;
  left: 0;
  bottom: 10px;
}
.selectPattern > div > input {
  margin: 0 5px;
}
#button_start {
  position: absolute;
  right: 20px;
  bottom: 10px;
  width: 140px;
  height: 50px;
  border: none;
}
</style>